using System.Collections;
using UnityEngine;

namespace Assets.Scripts.Controllers
{
    public class SwordRotateController : MonoBehaviour
    {
        [SerializeField] private float rotationSpeed;

        void FixedUpdate()
        {
            transform.RotateAround(transform.parent.position, Vector3.forward, rotationSpeed * Time.fixedDeltaTime);
        }
    }
}