using Assets.Scripts.Enums;
using Assets.Scripts.Signals;
using UnityEngine;

namespace Assets.Scripts.Controllers
{
    public class SwordCollisionController : MonoBehaviour
    {
        [SerializeField] private int killPrizeCount;
        [SerializeField] private float spawnRadius;

        private void OnCollisionEnter2D(Collision2D collision)
        {
            if (collision.gameObject.CompareTag("Player"))
            {
                PlayerSignals.Instance.onDecreaseHealth?.Invoke(35);

                if (PlayerSignals.Instance.onCheckHealth.Invoke())
                {
                    collision.gameObject.SetActive(false);
                    GameSignals.Instance.onGameOver?.Invoke();
                }
            }
            else if (collision.gameObject.CompareTag("Enemy"))
            {
                collision.gameObject.GetComponent<EnemyHealthController>().DecreaseHealth(35);
                
                if (collision.gameObject.GetComponent<EnemyHealthController>().CheckHealth())
                {
                    collision.gameObject.SetActive(false);

                    GetPrize(collision);
                }
            }
            else if (collision.gameObject.CompareTag("Sword"))
            {
                gameObject.SetActive(false);
                collision.gameObject.SetActive(false);
            }
        }

        private void GetPrize(Collision2D collision)
        {
            for (int i = 0; i < killPrizeCount; i++)
            {
                GameObject obj = PoolSignals.Instance.onGetObjectFromPool?.Invoke(EntityTypes.Item);
                Vector2 randomOffset = Random.insideUnitCircle * spawnRadius;
                obj.transform.position = collision.gameObject.transform.position + (Vector3)randomOffset;
            }
        }
    }
}