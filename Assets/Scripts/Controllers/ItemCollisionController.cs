using Assets.Scripts.Controllers;
using Assets.Scripts.Enums;
using Assets.Scripts.Signals;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ItemCollisionController : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.CompareTag("Player") || collision.gameObject.CompareTag("Enemy"))
        {
            GameObject sword = PoolSignals.Instance.onGetObjectFromPool?.Invoke(EntityTypes.Sword);

            SwordRotateController swordRotateController = collision.gameObject.GetComponentInChildren<SwordRotateController>();

            sword.transform.SetParent(swordRotateController.transform);

            swordRotateController.SetSwordPositionAndRotation();

            gameObject.SetActive(false);
        }
    }
}
