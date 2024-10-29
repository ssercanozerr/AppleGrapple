using Assets.Scripts.Abstracts;
using Assets.Scripts.Managers;
using System.Linq;
using UnityEngine;

namespace Assets.Scripts.Controllers
{
    public class EnemyLootState : EnemyBaseState
    {
        public override void EnterState(EnemyStateManager enemy)
        {
            FindNearestItem(enemy);
        }

        public override void UpdateState(EnemyStateManager enemy)
        {
            if (enemy.CurrentItem == null)
            {
                FindNearestItem(enemy);
                return;
            }

            enemy.MoveTowards(enemy.CurrentItem);

            if (Vector2.Distance(enemy.transform.position, enemy.CurrentItem.transform.position) < 0.1f)
            {
                FindNearestItem(enemy);
            }
        }

        private void FindNearestItem(EnemyStateManager enemy)
        {
            GameObject[] items = GameObject.FindGameObjectsWithTag("PickUpItem");
            enemy.CurrentItem = items.OrderBy(i => Vector2.Distance(enemy.transform.position, i.transform.position)).FirstOrDefault();
        }
    }
}