using UnityEngine;
using UnityEngine.Events;

namespace Assets.Scripts.Signals
{
    public class ScratchSignals : MonoBehaviour
    {
        public static ScratchSignals Instance;

        public UnityAction<Vector2, float> onTryScratchHole;

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