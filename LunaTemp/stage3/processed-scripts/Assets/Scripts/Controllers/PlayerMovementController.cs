using UnityEngine;

public class PlayerMovementController : MonoBehaviour
{
    [SerializeField] private float speed;

    private Rigidbody2D _rb;

    private void Awake()
    {
        _rb = GetComponent<Rigidbody2D>();
    }

    private void FixedUpdate()
    {
        MoveMousePosition();
    }

    private void MoveMousePosition()
    {
        if (Input.GetMouseButton(0))
        {
            Vector2 mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            Vector2 targetPosition = Vector2.Lerp(transform.position, mousePosition, speed * Time.fixedDeltaTime);

            _rb.MovePosition(targetPosition);
        }
    }
}
