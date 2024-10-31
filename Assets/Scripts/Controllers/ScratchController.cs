using Assets.Scripts.Signals;
using UnityEngine;

namespace Assets.Scripts.Controllers
{
    public class ScratchController : MonoBehaviour
    {
        public Vector2 _offset;
        private RectTransform _uiElement;

        private void Awake()
        {
            GameObject canvasObject = GameObject.FindWithTag("Canvas");
            if (canvasObject != null)
            {
                _uiElement = canvasObject.GetComponent<RectTransform>();
            }
            else
            {
                Debug.LogWarning("Canvas with the tag 'Canvas' not found!");
            }
        }

        private void Update()
        {
            Vector3 screenPosition = Camera.main.WorldToScreenPoint(transform.position);

            RectTransformUtility.ScreenPointToLocalPointInRectangle(
                _uiElement,
                screenPosition,
                null,
                out Vector2 uiPosition
            );

            uiPosition += _offset;

            ScratchSignals.Instance.onTryScratchHole?.Invoke(uiPosition, 1);
        }
    }
}
