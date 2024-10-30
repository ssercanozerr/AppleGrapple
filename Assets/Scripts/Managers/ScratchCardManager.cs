using Assets.Scripts.Controllers;
using Assets.Scripts.Signals;
using UnityEngine;

namespace Assets.Scripts.Managers
{
    public class ScratchCardManager : MonoBehaviour
    {
        [SerializeField] private ScratchCardController scratchCardController;

        private void OnEnable()
        {
            ScratchCardSignals.Instance.onScratchHole += scratchCardController.ScratchHole;
        }

        private void OnDisable()
        {
            ScratchCardSignals.Instance.onScratchHole -= scratchCardController.ScratchHole;
        }
    }
}