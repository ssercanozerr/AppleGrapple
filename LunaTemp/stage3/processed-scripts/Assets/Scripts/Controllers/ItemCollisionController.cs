using Assets.Scripts.Enums;
using Assets.Scripts.Signals;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ItemCollisionController : MonoBehaviour
{
    [SerializeField] private float radius;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.CompareTag("Player") || collision.gameObject.CompareTag("Enemy"))
        {
            GameObject sword = PoolSignals.Instance.onGetObjectFromPool?.Invoke(EntityTypes.Sword);
            sword.transform.SetParent(collision.transform);

            SetSwordPositionAndRotation(collision.transform);

            gameObject.SetActive(false);
        }
    }

    private void SetSwordPositionAndRotation(Transform characterTransform)
    {
        var swords = new List<Transform>();
        foreach (Transform child in characterTransform)
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

            Vector3 swordPosition = new UnityEngine.Vector3(
                Mathf.Cos(angleRad) * radius,
                Mathf.Sin(angleRad) * radius,
                0f
            );

            swords[i].position = characterTransform.position + swordPosition;

            Vector3 direction = swords[i].position - characterTransform.position;
            float angleToPlayer = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
            swords[i].rotation = Quaternion.Euler(0, 0, angleToPlayer);
        }
    }
}
