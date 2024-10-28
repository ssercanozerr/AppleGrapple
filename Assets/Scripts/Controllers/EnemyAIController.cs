using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace Assets.Scripts.Controllers
{
    public class EnemyAIController : MonoBehaviour
    {
        [SerializeField] private float detectionRange;
        [SerializeField] private float speed;

        private GameObject _currentItem;
        private GameObject _currentTarget;

        private void Start()
        {
            FindNearestItem();
        }

        private void Update()
        {
            if (_currentTarget != null && Vector2.Distance(transform.position, _currentTarget.transform.position) < detectionRange)
            {
                if (!HasSword()) { FleeFromTarget(); }
                else { MoveToTarget(); }
            }
            else if (_currentItem != null)
            {
                FindNearestItem();
                MoveToItem();
                CheckForTargetsInRange();
            }
            else { return; }
        }

        private void MoveToTarget()
        {
            MoveTowards(_currentTarget);
        }

        private void MoveToItem()
        {
            MoveTowards(_currentItem);

            if (Vector2.Distance(transform.position, _currentItem.transform.position) < 0.1f)
            {
                FindNearestItem();
            }
        }

        private void MoveTowards(GameObject target)
        {
            Vector2 direction = (target.transform.position - transform.position).normalized;
            transform.position += speed * Time.deltaTime * (Vector3)direction;
        }

        private void FindNearestItem()
        {
            GameObject[] items = GameObject.FindGameObjectsWithTag("PickUpItem");
            _currentItem = items.OrderBy(i => Vector2.Distance(transform.position, i.transform.position)).FirstOrDefault();
        }

        private void CheckForTargetsInRange()
        {
            GameObject[] enemies = GameObject.FindGameObjectsWithTag("Enemy").Where(e => e != this.gameObject).ToArray();
            GameObject player = GameObject.FindGameObjectWithTag("Player");

            List<GameObject> targetsInRange = enemies.ToList();

            if (player != null) { targetsInRange.Add(player); }
            
            _currentTarget = targetsInRange
                .Where(t => Vector2.Distance(transform.position, t.transform.position) <= detectionRange)
                .OrderBy(t => Vector2.Distance(transform.position, t.transform.position))
                .FirstOrDefault();
        }

        private bool HasSword()
        {
            return transform.GetComponentsInChildren<Transform>().Any(child => child.CompareTag("Sword"));
        }

        private void FleeFromTarget()
        {
            if (_currentTarget != null)
            {
                Vector2 direction = (transform.position - _currentTarget.transform.position).normalized;
                transform.position += speed * Time.deltaTime * (Vector3)direction;
            }
        }
    }
}