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

        // Bu nesneyi JSON format�na �evirir
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this);
        }

        // JSON'dan nesneye �evirir
        public void FromJson(string json)
        {
            JsonConvert.PopulateObject(json, this);
        }
    }
}