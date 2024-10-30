using Assets.Scripts.Enums;
using Assets.Scripts.Signals;
using System.Collections;
using UnityEngine;

public class GameController : MonoBehaviour
{
    [SerializeField] private float xMin;
    [SerializeField] private float xMax;
    [SerializeField] private float yMin;
    [SerializeField] private float yMax;
    [SerializeField] private float itemSpawnTime;

    [SerializeField] private int itemCount;
    [SerializeField] private int enemyCount;
    [SerializeField] private GameObject endPanel;

    private void Start()
    {
        for (int i = 0; i < itemCount; i++)
        {
            GetObject(EntityTypes.Item);
        }
        for (int i = 0; i < enemyCount; i++)
        {
            GetObject(EntityTypes.Enemy);
        }

        StartCoroutine(RespawnItems());
    }

    public void OnGameOver()
    {
        endPanel.SetActive(true);
    }

    private GameObject GetObject(EntityTypes entityTypes)
    {
        GameObject obj = PoolSignals.Instance.onGetObjectFromPool?.Invoke(entityTypes);
        SetObjPosition(obj);
        return obj;
    }

    private void SetObjPosition(GameObject obj)
    {
        float randomX = Random.Range(xMin, xMax);
        float randomY = Random.Range(yMin, yMax);

        obj.transform.position = new Vector2 (randomX, randomY);
    }

    private IEnumerator RespawnItems()
    {
        while (true)
        {
            yield return new WaitForSeconds(itemSpawnTime);

            for (int i = 0; i < itemCount; i++)
            {
                GetObject(EntityTypes.Item);
            }
        }
    }
}
