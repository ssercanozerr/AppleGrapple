using Assets.Scripts.Abstracts;
using Assets.Scripts.Controllers;
using System.Linq;
using UnityEngine;

namespace Assets.Scripts.Managers
{
    public class EnemyStateManager : MonoBehaviour
    {
        [SerializeField] private float detectionRange;
        [SerializeField] private float speed;

        private EnemyBaseState _currentState;
        public EnemyLootState LootState = new EnemyLootState();
        public EnemyAttackState AttackState  = new EnemyAttackState();
        public EnemyFleeState FleeState  = new EnemyFleeState();
     
        public float DetectionRange => detectionRange;
        public float Speed => speed;
        public GameObject CurrentItem { get; set; }
        public GameObject CurrentTarget { get; set; }

        private void Start()
        {
            SwitchState(LootState);
        }

        private void Update()
        {
            CheckForTargetsInRange();
            _currentState.UpdateState(this);
        }

        public void SwitchState(EnemyBaseState state)
        {
            _currentState = state;
            _currentState.EnterState(this);
        }

        public bool HasSword()
        {
            return transform.GetComponentsInChildren<Transform>().Any(child => child.CompareTag("Sword"));
        }

        public void MoveTowards(GameObject target)
        {
            if (target == null) return;
            Vector2 direction = (target.transform.position - transform.position).normalized;
            transform.position += speed * Time.deltaTime * (Vector3)direction;
        }

        private void CheckForTargetsInRange()
        {
            GameObject[] enemies = GameObject.FindGameObjectsWithTag("Enemy").Where(e => e != this.gameObject).ToArray();
            GameObject player = GameObject.FindGameObjectWithTag("Player");

            var targetsInRange = enemies.ToList();
            if (player != null) { targetsInRange.Add(player); }

            CurrentTarget = targetsInRange
                .Where(t => Vector2.Distance(transform.position, t.transform.position) <= DetectionRange)
                .OrderBy(t => Vector2.Distance(transform.position, t.transform.position))
                .FirstOrDefault();

            if (CurrentTarget != null)
            {
                if (HasSword()) { SwitchState(AttackState); }
                else { SwitchState(FleeState); }
            }
            else
            {
                SwitchState(LootState);
            }
        }
    }
}