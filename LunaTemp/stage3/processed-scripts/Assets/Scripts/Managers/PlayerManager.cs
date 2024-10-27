using Assets.Scripts.Controllers;
using Assets.Scripts.Signals;
using System.Collections;
using UnityEngine;

namespace Assets.Scripts.Managers
{
    public class PlayerManager : MonoBehaviour
    {
        [SerializeField]  private PlayerHealthController playerHealthController;

        private void OnEnable()
        {
            PlayerSignals.Instance.onDecreaseHealth += playerHealthController.DecreaseHealth;
        }

        private void OnDisable()
        {
            PlayerSignals.Instance.onDecreaseHealth -= playerHealthController.DecreaseHealth;
        }
    }
}