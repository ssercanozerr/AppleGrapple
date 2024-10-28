using UnityEngine;

[CreateAssetMenu(fileName = "New Enemy Info", menuName = "Enemy Info")]
public class EnemyInfos : ScriptableObject
{
    public EnemyInfosSet[] enemyInfosSet;

    private int _currentIndex = 0;
 
    public EnemyInfosSet GetNextInfosSet()
    {
        if (_currentIndex >= enemyInfosSet.Length) { _currentIndex = 0; }

        return enemyInfosSet[_currentIndex++];
    }
}
