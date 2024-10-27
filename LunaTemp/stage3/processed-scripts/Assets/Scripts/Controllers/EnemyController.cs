using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Assets.Scripts.Controllers
{
    public class EnemyController : MonoBehaviour
    {
        [SerializeField] private EnemyInfos enemyInfos;
        [SerializeField] private GameObject body;
        [SerializeField] private GameObject leftLeg;
        [SerializeField] private GameObject rightLeg;
        [SerializeField] private TextMeshProUGUI enemyName;
        [SerializeField] private Image countryFlag;

        private SpriteRenderer _bodySpriteRenderer;
        private SpriteRenderer _leftLegSpriteRenderer;
        private SpriteRenderer _rightLegSpriteRenderer;

        void Awake()
        {
            _bodySpriteRenderer = body.GetComponent<SpriteRenderer>();
            _leftLegSpriteRenderer = leftLeg.GetComponent<SpriteRenderer>();
            _rightLegSpriteRenderer = rightLeg.GetComponent<SpriteRenderer>();
        }

        void Start()
        {
            EnemyInfosSet chosenSet = enemyInfos.GetNextInfosSet();

            _bodySpriteRenderer.sprite = chosenSet.body;
            _leftLegSpriteRenderer.sprite = chosenSet.leftLeg;
            _rightLegSpriteRenderer.sprite = chosenSet.rightLeg;
            enemyName.text = chosenSet.enemyName;
            countryFlag.sprite = chosenSet.countryFlag;
        }
    }
}