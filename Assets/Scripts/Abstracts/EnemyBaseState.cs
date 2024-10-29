using Assets.Scripts.Managers;
using UnityEngine;

namespace Assets.Scripts.Abstracts
{
    public abstract class EnemyBaseState
    {
        public abstract void EnterState(EnemyStateManager enemy);
        public abstract void UpdateState(EnemyStateManager enemy);
    }
}
