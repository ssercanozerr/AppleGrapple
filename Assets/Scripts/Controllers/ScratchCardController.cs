using System.Collections;
using UnityEngine;

namespace Assets.Scripts.Controllers
{
    public class ScratchCardController : MonoBehaviour
    {
        [SerializeField] private GameObject stratchCard;

        public void ScratchHole(GameObject scratchMask)
        {
            scratchMask.transform.parent = stratchCard.transform;
        }
    }
}