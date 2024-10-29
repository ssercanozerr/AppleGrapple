using Assets.Scripts.Abstracts;
using Assets.Scripts.Managers;
using UnityEngine;

namespace Assets.Scripts.Controllers
{
    public class EnemyFleeState : EnemyBaseState
    {
        public override void EnterState(EnemyStateManager enemy) { }

        public override void UpdateState(EnemyStateManager enemy)
        {
            if (enemy.CurrentTarget == null) return;

            Vector2 direction = (enemy.transform.position - enemy.CurrentTarget.transform.position).normalized;
            enemy.transform.position += enemy.Speed * Time.deltaTime * (Vector3)direction;
        }
    }
}