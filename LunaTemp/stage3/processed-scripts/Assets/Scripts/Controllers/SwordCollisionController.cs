using Assets.Scripts.Signals;
using UnityEngine;

namespace Assets.Scripts.Controllers
{
    public class SwordCollisionController : MonoBehaviour
    {
        private void OnCollisionEnter2D(Collision2D collision)
        {
            if (collision.gameObject.CompareTag("Player"))
            {
                PlayerSignals.Instance.onDecreaseHealth?.Invoke(35);
            }
            else if (collision.gameObject.CompareTag("Enemy"))
            {
                collision.gameObject.GetComponent<EnemyHealthController>().DecreaseHealth(35);
            }
            else if (collision.gameObject.CompareTag("Sword"))
            {
                //set active false
            }
        }
    }
}