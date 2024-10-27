using System.Collections;
using UnityEngine;
using UnityEngine.Events;

namespace Assets.Scripts.Signals
{
    public class PlayerSignals : MonoBehaviour
    {
        public static PlayerSignals Instance;

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