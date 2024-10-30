using UnityEngine;
using UnityEngine.Events;

namespace Assets.Scripts.Signals
{
    public class ScratchCardSignals : MonoBehaviour
    {
        public static ScratchCardSignals Instance;
        
        public UnityAction<GameObject> onScratchHole;

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