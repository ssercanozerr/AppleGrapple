using Assets.Scripts.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class PoolController : MonoBehaviour
{
    [Serializable]
    private struct Pool
    {
        public Queue<GameObject> pooledObjs;
        public GameObject objPrefab;
        public int poolSize;
        public int increaseAmount;
    }

    [SerializeField] private Pool[] pools;

    private void Awake()
    {
        for (int i = 0; i < pools.Length; i++)
        {
            pools[i].pooledObjs = new Queue<GameObject>();

            for (int j = 0; j < pools[i].poolSize; j++)
            {
                GameObject obj = Instantiate(pools[i].objPrefab);

                obj.SetActive(false);

                pools[i].pooledObjs.Enqueue(obj);
            }
        }
    }

    public GameObject OnGetObjectFromPool(EntityTypes entityType)
    {
        Pool pool = pools[(int)entityType];

        if (pool.pooledObjs.FirstOrDefault(x => !x.activeSelf) == null)
        {
            IncreasePoolSize(pool);
        }

        GameObject obj = pool.pooledObjs.Dequeue();

        obj.SetActive(true);

        pool.pooledObjs.Enqueue(obj);

        return obj;
    }

    private void IncreasePoolSize([Bridge.Ref] Pool pool)
    {
        for (int j = 0; j < pool.increaseAmount; j++)
        {
            GameObject obj = Instantiate(pool.objPrefab);

            obj.SetActive(false);

            pool.pooledObjs.Enqueue(obj);
        }

        int oldPoolSize = pool.pooledObjs.Count - pool.increaseAmount;

        for (int i = 0; i < oldPoolSize; i++)
        {
            GameObject obj = pool.pooledObjs.Dequeue();

            pool.pooledObjs.Enqueue(obj);
        }
    }
}
