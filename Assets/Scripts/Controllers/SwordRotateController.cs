using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Assets.Scripts.Controllers
{
    public class SwordRotateController : MonoBehaviour
    {
        [SerializeField] private float rotationSpeed;
        [SerializeField] private float radius;

        private void Update()
        {
            transform.RotateAround(transform.parent.position, Vector3.forward, rotationSpeed * Time.deltaTime);
        }

        public void SetSwordPositionAndRotation()
        {
            var swords = new List<Transform>();
            foreach (Transform child in transform)
            {
                if (child.CompareTag("Sword"))
                {
                    swords.Add(child);
                }
            }

            int swordCount = swords.Count;
            for (int i = 0; i < swordCount; i++)
            {
                float angle = i * (360f / swordCount);
                float angleRad = angle * Mathf.Deg2Rad;

                Vector3 swordPosition = new Vector3(
                    Mathf.Cos(angleRad) * radius,
                    Mathf.Sin(angleRad) * radius,
                    0f
                );

                swords[i].position = transform.position + swordPosition;
                swords[i].GetComponent<SwordCollisionController>().ResetPosition();

                Vector3 direction = swords[i].position - transform.position;
                float angleToPlayer = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
                swords[i].rotation = Quaternion.Euler(0, 0, angleToPlayer);
            }
        }
    }
}