using Assets.Scripts.Abstracts;
using Assets.Scripts.Managers;
using System.Linq;
using UnityEngine;

namespace Assets.Scripts.Controllers
{
    public class EnemyAttackState : EnemyBaseState
    {
        public override void EnterState(EnemyStateManager enemy) { }

        public override void UpdateState(EnemyStateManager enemy)
        {
            if (enemy.CurrentTarget == null) return;
            enemy.MoveTowards(enemy.CurrentTarget);
        }
    }
}