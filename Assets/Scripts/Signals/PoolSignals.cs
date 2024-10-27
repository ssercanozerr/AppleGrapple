using Assets.Scripts.Enums;
using System;
using System.Collections;
using Unity.VisualScripting;
using UnityEngine;

namespace Assets.Scripts.Signals
{
    public class PoolSignals : MonoBehaviour
    {
        public static PoolSignals Instance;

        public Func<EntityTypes, GameObject> onGetObjectFromPool;

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