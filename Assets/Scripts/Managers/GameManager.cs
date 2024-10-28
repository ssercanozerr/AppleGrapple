using Assets.Scripts.Signals;
using System.Collections;
using UnityEngine;

namespace Assets.Scripts.Managers
{
    public class GameManager : MonoBehaviour
    {
        [SerializeField] private GameController gameController;

        private void OnEnable()
        {
            GameSignals.Instance.onGameOver += gameController.OnGameOver;
        }

        private void OnDisable()
        {
            GameSignals.Instance.onGameOver -= gameController.OnGameOver;
        }
    }
}