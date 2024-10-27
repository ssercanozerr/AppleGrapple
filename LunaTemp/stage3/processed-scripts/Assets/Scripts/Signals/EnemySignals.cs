using UnityEngine;
using UnityEngine.Events;

namespace Assets.Scripts.Signals
{
    public class EnemySignals : MonoBehaviour
    {
        public static EnemySignals Instance;

        public UnityAction<float> onDecreaseHealth;

        private void Awake()
        {
            if (Instance != null && Instance != this)
            {
                Destroy(gameObject);
                return;
            }
            Instance = this;
        }
    }
}