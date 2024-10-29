using UnityEngine;

namespace Assets.Scripts.Controllers
{
    public class BackgroundController : MonoBehaviour
    {
        [SerializeField] private GameObject[] tilePrefabs;
        [SerializeField] private int gridWidth;
        [SerializeField] private int gridHeight;
        [SerializeField] private float tileSize;

        private void Start()
        {
            CreateRandomBackground();
        }

        private void CreateRandomBackground()
        {
            for (int i = 0; i < gridWidth; i++)
            {
                for (int j = 0; j < gridHeight; j++)
                {
                    GameObject randomTile = tilePrefabs[Random.Range(0, tilePrefabs.Length)];

                    Vector2 tilePosition = new Vector2(i * tileSize, j * tileSize) + (Vector2)transform.position;

                    Instantiate(randomTile, tilePosition, Quaternion.identity, transform);
                }
            }
        }
    }
}