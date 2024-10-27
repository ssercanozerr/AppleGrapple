using UnityEngine;
using UnityEngine.UI;

namespace Assets.Scripts.Abstracts
{
    public abstract class AbsHealth : MonoBehaviour
    {
        [SerializeField] protected float maxHealth;
        [SerializeField] protected Image healthBar;

        protected float _health;

        protected virtual void Awake()
        {
            _health = maxHealth;
            UpdateHealthBar();
        }

        public void DecreaseHealth(float damage)
        {
            _health -= damage;
            _health = Mathf.Clamp(_health, 0, maxHealth);
            UpdateHealthBar();
        }

        protected void UpdateHealthBar()
        {
            if (healthBar != null)
            {
                healthBar.fillAmount = _health / maxHealth;
            }
        }
    }
}
