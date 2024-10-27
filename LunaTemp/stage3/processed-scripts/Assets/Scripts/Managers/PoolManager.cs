using Assets.Scripts.Signals;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PoolManager : MonoBehaviour
{
    [SerializeField] private PoolController poolController;

    private void OnEnable()
    {
        PoolSignals.Instance.onGetObjectFromPool += poolController.OnGetObjectFromPool;
    }

    private void OnDisable()
    {
        PoolSignals.Instance.onGetObjectFromPool -= poolController.OnGetObjectFromPool;
    }
}
