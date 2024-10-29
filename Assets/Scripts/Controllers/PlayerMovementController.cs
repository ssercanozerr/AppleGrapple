using UnityEngine;

public class PlayerMovementController : MonoBehaviour
{
    [SerializeField] private float speed;

    private Rigidbody2D _rb;
    private Animator _animator;
    private Transform _bodyTransform;

    private void Awake()
    {
        _rb = GetComponent<Rigidbody2D>();
        _animator = GetComponent<Animator>();
        _bodyTransform = transform.Find("Body");
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
            Vector2 direction = mousePosition - (Vector2)transform.position;

            if (direction.x > 0)
            {
                _bodyTransform.rotation = Quaternion.Euler(0, 0, 0);
            }
            else if (direction.x < 0)
            {
                _bodyTransform.rotation = Quaternion.Euler(0, 180, 0);
            }

            _rb.MovePosition(targetPosition);
            _animator.SetBool("Walk", true);
        }
        else { _animator.SetBool("Walk", false); }
    }
}
