using System.Collections.Generic;
using Newtonsoft.Json; // Newtonsoft namespace'ini ekleyin
using ScratchCardAsset.Core;
using UnityEngine;

namespace ScratchCardAsset.Animation
{
    [CreateAssetMenu(menuName = "Scratch Card/Scratch Animation", fileName = nameof(ScratchAnimation))]
    public class ScratchAnimation : ScriptableObject
    {
        [SerializeReference] public List<BaseScratch> Scratches;
        public ScratchAnimationSpace ScratchSpace;

        // Bu nesneyi JSON formatýna çevirir
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this);
        }

        // JSON'dan nesneye çevirir
        public void FromJson(string json)
        {
            JsonConvert.PopulateObject(json, this);
        }
    }
}