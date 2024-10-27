using UnityEngine;
using UnityEngine.UI;

[CreateAssetMenu(fileName = "New Enemy Info", menuName = "Enemy Info")]
public class EnemyInfos : ScriptableObject
{
    public int enemySpeed;
    public float enemyMaxHealth;
    public Image healthBar;
    public EnemyInfosSet[] enemyInfosSet;

    private int _currentIndex = 0;
 
    public EnemyInfosSet GetNextInfosSet()
    {
        if (_currentIndex >= enemyInfosSet.Length) { _currentIndex = 0; }

        return enemyInfosSet[_currentIndex++];
    }
}
