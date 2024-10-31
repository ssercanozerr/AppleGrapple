var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.JointSpring' )
  var i587 = data
  i586.spring = i587[0]
  i586.damper = i587[1]
  i586.targetPosition = i587[2]
  return i586
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.JointMotor' )
  var i589 = data
  i588.m_TargetVelocity = i589[0]
  i588.m_Force = i589[1]
  i588.m_FreeSpin = i589[2]
  return i588
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointLimits' )
  var i591 = data
  i590.m_Min = i591[0]
  i590.m_Max = i591[1]
  i590.m_Bounciness = i591[2]
  i590.m_BounceMinVelocity = i591[3]
  i590.m_ContactDistance = i591[4]
  i590.minBounce = i591[5]
  i590.maxBounce = i591[6]
  return i590
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.JointDrive' )
  var i593 = data
  i592.m_PositionSpring = i593[0]
  i592.m_PositionDamper = i593[1]
  i592.m_MaximumForce = i593[2]
  i592.m_UseAcceleration = i593[3]
  return i592
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i595 = data
  i594.m_Spring = i595[0]
  i594.m_Damper = i595[1]
  return i594
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i597 = data
  i596.m_Limit = i597[0]
  i596.m_Bounciness = i597[1]
  i596.m_ContactDistance = i597[2]
  return i596
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i599 = data
  i598.m_ExtremumSlip = i599[0]
  i598.m_ExtremumValue = i599[1]
  i598.m_AsymptoteSlip = i599[2]
  i598.m_AsymptoteValue = i599[3]
  i598.m_Stiffness = i599[4]
  return i598
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i601 = data
  i600.m_LowerAngle = i601[0]
  i600.m_UpperAngle = i601[1]
  return i600
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i603 = data
  i602.m_MotorSpeed = i603[0]
  i602.m_MaximumMotorTorque = i603[1]
  return i602
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i605 = data
  i604.m_DampingRatio = i605[0]
  i604.m_Frequency = i605[1]
  i604.m_Angle = i605[2]
  return i604
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i607 = data
  i606.m_LowerTranslation = i607[0]
  i606.m_UpperTranslation = i607[1]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i609 = data
  i608.position = new pc.Vec3( i609[0], i609[1], i609[2] )
  i608.scale = new pc.Vec3( i609[3], i609[4], i609[5] )
  i608.rotation = new pc.Quat(i609[6], i609[7], i609[8], i609[9])
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i611 = data
  i610.radius = i611[0]
  i610.enabled = !!i611[1]
  i610.isTrigger = !!i611[2]
  i610.usedByEffector = !!i611[3]
  i610.density = i611[4]
  i610.offset = new pc.Vec2( i611[5], i611[6] )
  request.r(i611[7], i611[8], 0, i610, 'material')
  return i610
}

Deserializers["ItemCollisionController"] = function (request, data, root) {
  var i612 = root || request.c( 'ItemCollisionController' )
  var i613 = data
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i615 = data
  i614.enabled = !!i615[0]
  request.r(i615[1], i615[2], 0, i614, 'sharedMaterial')
  var i617 = i615[3]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i614.sharedMaterials = i616
  i614.receiveShadows = !!i615[4]
  i614.shadowCastingMode = i615[5]
  i614.sortingLayerID = i615[6]
  i614.sortingOrder = i615[7]
  i614.lightmapIndex = i615[8]
  i614.lightmapSceneIndex = i615[9]
  i614.lightmapScaleOffset = new pc.Vec4( i615[10], i615[11], i615[12], i615[13] )
  i614.lightProbeUsage = i615[14]
  i614.reflectionProbeUsage = i615[15]
  i614.color = new pc.Color(i615[16], i615[17], i615[18], i615[19])
  request.r(i615[20], i615[21], 0, i614, 'sprite')
  i614.flipX = !!i615[22]
  i614.flipY = !!i615[23]
  i614.drawMode = i615[24]
  i614.size = new pc.Vec2( i615[25], i615[26] )
  i614.tileMode = i615[27]
  i614.adaptiveModeThreshold = i615[28]
  i614.maskInteraction = i615[29]
  i614.spriteSortPoint = i615[30]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i621 = data
  i620.name = i621[0]
  i620.tagId = i621[1]
  i620.enabled = !!i621[2]
  i620.isStatic = !!i621[3]
  i620.layer = i621[4]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'animatorController')
  request.r(i623[2], i623[3], 0, i622, 'avatar')
  i622.updateMode = i623[4]
  i622.hasTransformHierarchy = !!i623[5]
  i622.applyRootMotion = !!i623[6]
  var i625 = i623[7]
  var i624 = []
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 2, i624, '')
  }
  i622.humanBones = i624
  i622.enabled = !!i623[8]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i628 = root || new pc.UnityMaterial()
  var i629 = data
  i628.name = i629[0]
  request.r(i629[1], i629[2], 0, i628, 'shader')
  i628.renderQueue = i629[3]
  i628.enableInstancing = !!i629[4]
  var i631 = i629[5]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i631[i + 0]) );
  }
  i628.floatParameters = i630
  var i633 = i629[6]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i633[i + 0]) );
  }
  i628.colorParameters = i632
  var i635 = i629[7]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i635[i + 0]) );
  }
  i628.vectorParameters = i634
  var i637 = i629[8]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i637[i + 0]) );
  }
  i628.textureParameters = i636
  var i639 = i629[9]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i639[i + 0]) );
  }
  i628.materialFlags = i638
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i643 = data
  i642.name = i643[0]
  i642.value = i643[1]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i647 = data
  i646.name = i647[0]
  i646.value = new pc.Color(i647[1], i647[2], i647[3], i647[4])
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i651 = data
  i650.name = i651[0]
  i650.value = new pc.Vec4( i651[1], i651[2], i651[3], i651[4] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i655 = data
  i654.name = i655[0]
  request.r(i655[1], i655[2], 0, i654, 'value')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i659 = data
  i658.name = i659[0]
  i658.enabled = !!i659[1]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i661 = data
  i660.name = i661[0]
  i660.width = i661[1]
  i660.height = i661[2]
  i660.mipmapCount = i661[3]
  i660.anisoLevel = i661[4]
  i660.filterMode = i661[5]
  i660.hdr = !!i661[6]
  i660.format = i661[7]
  i660.wrapMode = i661[8]
  i660.alphaIsTransparency = !!i661[9]
  i660.alphaSource = i661[10]
  i660.graphicsFormat = i661[11]
  i660.sRGBTexture = !!i661[12]
  i660.desiredColorSpace = i661[13]
  i660.wrapU = i661[14]
  i660.wrapV = i661[15]
  return i660
}

Deserializers["Assets.Scripts.Controllers.SwordCollisionController"] = function (request, data, root) {
  var i662 = root || request.c( 'Assets.Scripts.Controllers.SwordCollisionController' )
  var i663 = data
  i662.killPrizeCount = i663[0]
  i662.spawnRadius = i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i665 = data
  i664.bodyType = i665[0]
  request.r(i665[1], i665[2], 0, i664, 'material')
  i664.simulated = !!i665[3]
  i664.useAutoMass = !!i665[4]
  i664.mass = i665[5]
  i664.drag = i665[6]
  i664.angularDrag = i665[7]
  i664.gravityScale = i665[8]
  i664.collisionDetectionMode = i665[9]
  i664.sleepMode = i665[10]
  i664.constraints = i665[11]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i667 = data
  i666.enabled = !!i667[0]
  i666.isTrigger = !!i667[1]
  i666.usedByEffector = !!i667[2]
  i666.density = i667[3]
  i666.offset = new pc.Vec2( i667[4], i667[5] )
  request.r(i667[6], i667[7], 0, i666, 'material')
  i666.usedByComposite = !!i667[8]
  i666.autoTiling = !!i667[9]
  var i669 = i667[10]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
  var i671 = i669[i + 0]
  var i670 = []
  for(var i = 0; i < i671.length; i += 2) {
    i670.push( new pc.Vec2( i671[i + 0], i671[i + 1] ) );
  }
    i668.push( i670 );
  }
  i666.points = i668
  return i666
}

Deserializers["Assets.Scripts.Controllers.ScratchController"] = function (request, data, root) {
  var i678 = root || request.c( 'Assets.Scripts.Controllers.ScratchController' )
  var i679 = data
  i678._offset = new pc.Vec2( i679[0], i679[1] )
  return i678
}

Deserializers["Assets.Scripts.Controllers.EnemyInfosController"] = function (request, data, root) {
  var i680 = root || request.c( 'Assets.Scripts.Controllers.EnemyInfosController' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'enemyInfos')
  request.r(i681[2], i681[3], 0, i680, 'body')
  request.r(i681[4], i681[5], 0, i680, 'leftLeg')
  request.r(i681[6], i681[7], 0, i680, 'rightLeg')
  request.r(i681[8], i681[9], 0, i680, 'enemyName')
  request.r(i681[10], i681[11], 0, i680, 'countryFlag')
  return i680
}

Deserializers["Assets.Scripts.Controllers.EnemyHealthController"] = function (request, data, root) {
  var i682 = root || request.c( 'Assets.Scripts.Controllers.EnemyHealthController' )
  var i683 = data
  i682.maxHealth = i683[0]
  request.r(i683[1], i683[2], 0, i682, 'healthBar')
  return i682
}

Deserializers["Assets.Scripts.Managers.EnemyStateManager"] = function (request, data, root) {
  var i684 = root || request.c( 'Assets.Scripts.Managers.EnemyStateManager' )
  var i685 = data
  i684.detectionRange = i685[0]
  i684.speed = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i687 = data
  i686.pivot = new pc.Vec2( i687[0], i687[1] )
  i686.anchorMin = new pc.Vec2( i687[2], i687[3] )
  i686.anchorMax = new pc.Vec2( i687[4], i687[5] )
  i686.sizeDelta = new pc.Vec2( i687[6], i687[7] )
  i686.anchoredPosition3D = new pc.Vec3( i687[8], i687[9], i687[10] )
  i686.rotation = new pc.Quat(i687[11], i687[12], i687[13], i687[14])
  i686.scale = new pc.Vec3( i687[15], i687[16], i687[17] )
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i689 = data
  i688.enabled = !!i689[0]
  i688.planeDistance = i689[1]
  i688.referencePixelsPerUnit = i689[2]
  i688.isFallbackOverlay = !!i689[3]
  i688.renderMode = i689[4]
  i688.renderOrder = i689[5]
  i688.sortingLayerName = i689[6]
  i688.sortingOrder = i689[7]
  i688.scaleFactor = i689[8]
  request.r(i689[9], i689[10], 0, i688, 'worldCamera')
  i688.overrideSorting = !!i689[11]
  i688.pixelPerfect = !!i689[12]
  i688.targetDisplay = i689[13]
  i688.overridePixelPerfect = !!i689[14]
  return i688
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i691 = data
  i690.m_UiScaleMode = i691[0]
  i690.m_ReferencePixelsPerUnit = i691[1]
  i690.m_ScaleFactor = i691[2]
  i690.m_ReferenceResolution = new pc.Vec2( i691[3], i691[4] )
  i690.m_ScreenMatchMode = i691[5]
  i690.m_MatchWidthOrHeight = i691[6]
  i690.m_PhysicalUnit = i691[7]
  i690.m_FallbackScreenDPI = i691[8]
  i690.m_DefaultSpriteDPI = i691[9]
  i690.m_DynamicPixelsPerUnit = i691[10]
  i690.m_PresetInfoIsWorld = !!i691[11]
  return i690
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i693 = data
  i692.m_IgnoreReversedGraphics = !!i693[0]
  i692.m_BlockingObjects = i693[1]
  i692.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i693[2] )
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i695 = data
  i694.cullTransparentMesh = !!i695[0]
  return i694
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i696 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i697 = data
  i696.m_hasFontAssetChanged = !!i697[0]
  request.r(i697[1], i697[2], 0, i696, 'm_baseMaterial')
  i696.m_maskOffset = new pc.Vec4( i697[3], i697[4], i697[5], i697[6] )
  i696.m_text = i697[7]
  i696.m_isRightToLeft = !!i697[8]
  request.r(i697[9], i697[10], 0, i696, 'm_fontAsset')
  request.r(i697[11], i697[12], 0, i696, 'm_sharedMaterial')
  var i699 = i697[13]
  var i698 = []
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 2, i698, '')
  }
  i696.m_fontSharedMaterials = i698
  request.r(i697[14], i697[15], 0, i696, 'm_fontMaterial')
  var i701 = i697[16]
  var i700 = []
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 2, i700, '')
  }
  i696.m_fontMaterials = i700
  i696.m_fontColor32 = UnityEngine.Color32.ConstructColor(i697[17], i697[18], i697[19], i697[20])
  i696.m_fontColor = new pc.Color(i697[21], i697[22], i697[23], i697[24])
  i696.m_enableVertexGradient = !!i697[25]
  i696.m_colorMode = i697[26]
  i696.m_fontColorGradient = request.d('TMPro.VertexGradient', i697[27], i696.m_fontColorGradient)
  request.r(i697[28], i697[29], 0, i696, 'm_fontColorGradientPreset')
  request.r(i697[30], i697[31], 0, i696, 'm_spriteAsset')
  i696.m_tintAllSprites = !!i697[32]
  request.r(i697[33], i697[34], 0, i696, 'm_StyleSheet')
  i696.m_TextStyleHashCode = i697[35]
  i696.m_overrideHtmlColors = !!i697[36]
  i696.m_faceColor = UnityEngine.Color32.ConstructColor(i697[37], i697[38], i697[39], i697[40])
  i696.m_fontSize = i697[41]
  i696.m_fontSizeBase = i697[42]
  i696.m_fontWeight = i697[43]
  i696.m_enableAutoSizing = !!i697[44]
  i696.m_fontSizeMin = i697[45]
  i696.m_fontSizeMax = i697[46]
  i696.m_fontStyle = i697[47]
  i696.m_HorizontalAlignment = i697[48]
  i696.m_VerticalAlignment = i697[49]
  i696.m_textAlignment = i697[50]
  i696.m_characterSpacing = i697[51]
  i696.m_wordSpacing = i697[52]
  i696.m_lineSpacing = i697[53]
  i696.m_lineSpacingMax = i697[54]
  i696.m_paragraphSpacing = i697[55]
  i696.m_charWidthMaxAdj = i697[56]
  i696.m_enableWordWrapping = !!i697[57]
  i696.m_wordWrappingRatios = i697[58]
  i696.m_overflowMode = i697[59]
  request.r(i697[60], i697[61], 0, i696, 'm_linkedTextComponent')
  request.r(i697[62], i697[63], 0, i696, 'parentLinkedComponent')
  i696.m_enableKerning = !!i697[64]
  i696.m_enableExtraPadding = !!i697[65]
  i696.checkPaddingRequired = !!i697[66]
  i696.m_isRichText = !!i697[67]
  i696.m_parseCtrlCharacters = !!i697[68]
  i696.m_isOrthographic = !!i697[69]
  i696.m_isCullingEnabled = !!i697[70]
  i696.m_horizontalMapping = i697[71]
  i696.m_verticalMapping = i697[72]
  i696.m_uvLineOffset = i697[73]
  i696.m_geometrySortingOrder = i697[74]
  i696.m_IsTextObjectScaleStatic = !!i697[75]
  i696.m_VertexBufferAutoSizeReduction = !!i697[76]
  i696.m_useMaxVisibleDescender = !!i697[77]
  i696.m_pageToDisplay = i697[78]
  i696.m_margin = new pc.Vec4( i697[79], i697[80], i697[81], i697[82] )
  i696.m_isUsingLegacyAnimationComponent = !!i697[83]
  i696.m_isVolumetricText = !!i697[84]
  request.r(i697[85], i697[86], 0, i696, 'm_Material')
  i696.m_Maskable = !!i697[87]
  i696.m_Color = new pc.Color(i697[88], i697[89], i697[90], i697[91])
  i696.m_RaycastTarget = !!i697[92]
  i696.m_RaycastPadding = new pc.Vec4( i697[93], i697[94], i697[95], i697[96] )
  return i696
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i702 = root || request.c( 'TMPro.VertexGradient' )
  var i703 = data
  i702.topLeft = new pc.Color(i703[0], i703[1], i703[2], i703[3])
  i702.topRight = new pc.Color(i703[4], i703[5], i703[6], i703[7])
  i702.bottomLeft = new pc.Color(i703[8], i703[9], i703[10], i703[11])
  i702.bottomRight = new pc.Color(i703[12], i703[13], i703[14], i703[15])
  return i702
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.Mask' )
  var i705 = data
  i704.m_ShowMaskGraphic = !!i705[0]
  return i704
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.Image' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'm_Sprite')
  i706.m_Type = i707[2]
  i706.m_PreserveAspect = !!i707[3]
  i706.m_FillCenter = !!i707[4]
  i706.m_FillMethod = i707[5]
  i706.m_FillAmount = i707[6]
  i706.m_FillClockwise = !!i707[7]
  i706.m_FillOrigin = i707[8]
  i706.m_UseSpriteMesh = !!i707[9]
  i706.m_PixelsPerUnitMultiplier = i707[10]
  request.r(i707[11], i707[12], 0, i706, 'm_Material')
  i706.m_Maskable = !!i707[13]
  i706.m_Color = new pc.Color(i707[14], i707[15], i707[16], i707[17])
  i706.m_RaycastTarget = !!i707[18]
  i706.m_RaycastPadding = new pc.Vec4( i707[19], i707[20], i707[21], i707[22] )
  return i706
}

Deserializers["Assets.Scripts.Controllers.SwordRotateController"] = function (request, data, root) {
  var i708 = root || request.c( 'Assets.Scripts.Controllers.SwordRotateController' )
  var i709 = data
  i708.rotationSpeed = i709[0]
  i708.radius = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i711 = data
  i710.usedByComposite = !!i711[0]
  i710.autoTiling = !!i711[1]
  i710.size = new pc.Vec2( i711[2], i711[3] )
  i710.edgeRadius = i711[4]
  i710.enabled = !!i711[5]
  i710.isTrigger = !!i711[6]
  i710.usedByEffector = !!i711[7]
  i710.density = i711[8]
  i710.offset = new pc.Vec2( i711[9], i711[10] )
  request.r(i711[11], i711[12], 0, i710, 'material')
  return i710
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i712 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'Card')
  request.r(i713[2], i713[3], 0, i712, 'Progress')
  i712.RenderType = i713[4]
  request.r(i713[5], i713[6], 0, i712, 'MeshCard')
  request.r(i713[7], i713[8], 0, i712, 'SpriteCard')
  request.r(i713[9], i713[10], 0, i712, 'ImageCard')
  request.r(i713[11], i713[12], 0, i712, 'meshRendererCard')
  request.r(i713[13], i713[14], 0, i712, 'spriteRendererCard')
  request.r(i713[15], i713[16], 0, i712, 'canvasRendererCard')
  i712.scratchSurfaceSpriteHasAlpha = !!i713[17]
  i712.mode = i713[18]
  request.r(i713[19], i713[20], 0, i712, 'mainCamera')
  request.r(i713[21], i713[22], 0, i712, 'scratchSurfaceSprite')
  i712.progressAccuracy = i713[23]
  request.r(i713[24], i713[25], 0, i712, 'brushTexture')
  i712.brushSize = i713[26]
  i712.brushOpacity = i713[27]
  i712.inputEnabled = !!i713[28]
  i712.usePressure = !!i713[29]
  i712.checkCanvasRaycasts = !!i713[30]
  var i715 = i713[31]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i712.canvasesForRaycastsBlocking = i714
  request.r(i713[32], i713[33], 0, i712, 'maskShader')
  request.r(i713[34], i713[35], 0, i712, 'brushShader')
  request.r(i713[36], i713[37], 0, i712, 'maskProgressShader')
  return i712
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i718 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'SurfaceTransform')
  request.r(i719[2], i719[3], 0, i718, 'SurfaceMaterial')
  request.r(i719[4], i719[5], 0, i718, 'BrushMaterial')
  i718.BrushSize = i719[6]
  i718.RenderTextureQuality = i719[7]
  i718.mode = i719[8]
  return i718
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i720 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'card')
  request.r(i721[2], i721[3], 0, i720, 'progressMaterial')
  i720.sampleSourceTexture = !!i721[4]
  i720.progressAccuracy = i721[5]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'additionalVertexStreams')
  i722.enabled = !!i723[2]
  request.r(i723[3], i723[4], 0, i722, 'sharedMaterial')
  var i725 = i723[5]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i722.sharedMaterials = i724
  i722.receiveShadows = !!i723[6]
  i722.shadowCastingMode = i723[7]
  i722.sortingLayerID = i723[8]
  i722.sortingOrder = i723[9]
  i722.lightmapIndex = i723[10]
  i722.lightmapSceneIndex = i723[11]
  i722.lightmapScaleOffset = new pc.Vec4( i723[12], i723[13], i723[14], i723[15] )
  i722.lightProbeUsage = i723[16]
  i722.reflectionProbeUsage = i723[17]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'sharedMesh')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i729 = data
  i728.name = i729[0]
  i728.halfPrecision = !!i729[1]
  i728.useUInt32IndexFormat = !!i729[2]
  i728.vertexCount = i729[3]
  i728.aabb = i729[4]
  var i731 = i729[5]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( !!i731[i + 0] );
  }
  i728.streams = i730
  i728.vertices = i729[6]
  var i733 = i729[7]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i733[i + 0]) );
  }
  i728.subMeshes = i732
  var i735 = i729[8]
  var i734 = []
  for(var i = 0; i < i735.length; i += 16) {
    i734.push( new pc.Mat4().setData(i735[i + 0], i735[i + 1], i735[i + 2], i735[i + 3],  i735[i + 4], i735[i + 5], i735[i + 6], i735[i + 7],  i735[i + 8], i735[i + 9], i735[i + 10], i735[i + 11],  i735[i + 12], i735[i + 13], i735[i + 14], i735[i + 15]) );
  }
  i728.bindposes = i734
  var i737 = i729[9]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i737[i + 0]) );
  }
  i728.blendShapes = i736
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i743 = data
  i742.triangles = i743[0]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i749 = data
  i748.name = i749[0]
  var i751 = i749[1]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i751[i + 0]) );
  }
  i748.frames = i750
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i753 = data
  i752.name = i753[0]
  i752.index = i753[1]
  i752.startup = !!i753[2]
  return i752
}

Deserializers["Assets.Scripts.Signals.PoolSignals"] = function (request, data, root) {
  var i754 = root || request.c( 'Assets.Scripts.Signals.PoolSignals' )
  var i755 = data
  return i754
}

Deserializers["Assets.Scripts.Signals.PlayerSignals"] = function (request, data, root) {
  var i756 = root || request.c( 'Assets.Scripts.Signals.PlayerSignals' )
  var i757 = data
  return i756
}

Deserializers["Assets.Scripts.Signals.GameSignals"] = function (request, data, root) {
  var i758 = root || request.c( 'Assets.Scripts.Signals.GameSignals' )
  var i759 = data
  return i758
}

Deserializers["Assets.Scripts.Signals.ScratchSignals"] = function (request, data, root) {
  var i760 = root || request.c( 'Assets.Scripts.Signals.ScratchSignals' )
  var i761 = data
  return i760
}

Deserializers["PoolManager"] = function (request, data, root) {
  var i762 = root || request.c( 'PoolManager' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'poolController')
  return i762
}

Deserializers["Assets.Scripts.Managers.PlayerManager"] = function (request, data, root) {
  var i764 = root || request.c( 'Assets.Scripts.Managers.PlayerManager' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'playerHealthController')
  return i764
}

Deserializers["Assets.Scripts.Managers.GameManager"] = function (request, data, root) {
  var i766 = root || request.c( 'Assets.Scripts.Managers.GameManager' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'gameController')
  return i766
}

Deserializers["PoolController"] = function (request, data, root) {
  var i768 = root || request.c( 'PoolController' )
  var i769 = data
  var i771 = i769[0]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('PoolController+Pool', i771[i + 0]) );
  }
  i768.pools = i770
  return i768
}

Deserializers["PoolController+Pool"] = function (request, data, root) {
  var i774 = root || request.c( 'PoolController+Pool' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'objPrefab')
  i774.poolSize = i775[2]
  i774.increaseAmount = i775[3]
  return i774
}

Deserializers["GameController"] = function (request, data, root) {
  var i776 = root || request.c( 'GameController' )
  var i777 = data
  i776.xMin = i777[0]
  i776.xMax = i777[1]
  i776.yMin = i777[2]
  i776.yMax = i777[3]
  i776.itemSpawnTime = i777[4]
  i776.itemCount = i777[5]
  i776.enemyCount = i777[6]
  request.r(i777[7], i777[8], 0, i776, 'endPanel')
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i779 = data
  i778.enabled = !!i779[0]
  i778.aspect = i779[1]
  i778.orthographic = !!i779[2]
  i778.orthographicSize = i779[3]
  i778.backgroundColor = new pc.Color(i779[4], i779[5], i779[6], i779[7])
  i778.nearClipPlane = i779[8]
  i778.farClipPlane = i779[9]
  i778.fieldOfView = i779[10]
  i778.depth = i779[11]
  i778.clearFlags = i779[12]
  i778.cullingMask = i779[13]
  i778.rect = i779[14]
  request.r(i779[15], i779[16], 0, i778, 'targetTexture')
  i778.usePhysicalProperties = !!i779[17]
  i778.focalLength = i779[18]
  i778.sensorSize = new pc.Vec2( i779[19], i779[20] )
  i778.lensShift = new pc.Vec2( i779[21], i779[22] )
  i778.gateFit = i779[23]
  return i778
}

Deserializers["PlayerMovementController"] = function (request, data, root) {
  var i780 = root || request.c( 'PlayerMovementController' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'ui')
  i780.speed = i781[2]
  return i780
}

Deserializers["Assets.Scripts.Controllers.PlayerHealthController"] = function (request, data, root) {
  var i782 = root || request.c( 'Assets.Scripts.Controllers.PlayerHealthController' )
  var i783 = data
  i782.maxHealth = i783[0]
  request.r(i783[1], i783[2], 0, i782, 'healthBar')
  return i782
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.UI.Button' )
  var i785 = data
  i784.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i785[0], i784.m_OnClick)
  i784.m_Navigation = request.d('UnityEngine.UI.Navigation', i785[1], i784.m_Navigation)
  i784.m_Transition = i785[2]
  i784.m_Colors = request.d('UnityEngine.UI.ColorBlock', i785[3], i784.m_Colors)
  i784.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i785[4], i784.m_SpriteState)
  i784.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i785[5], i784.m_AnimationTriggers)
  i784.m_Interactable = !!i785[6]
  request.r(i785[7], i785[8], 0, i784, 'm_TargetGraphic')
  return i784
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i787 = data
  i786.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i787[0], i786.m_PersistentCalls)
  return i786
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i789 = data
  var i791 = i789[0]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('UnityEngine.Events.PersistentCall', i791[i + 0]));
  }
  i788.m_Calls = i790
  return i788
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'm_Target')
  i794.m_TargetAssemblyTypeName = i795[2]
  i794.m_MethodName = i795[3]
  i794.m_Mode = i795[4]
  i794.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i795[5], i794.m_Arguments)
  i794.m_CallState = i795[6]
  return i794
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i797 = data
  i796.m_Mode = i797[0]
  i796.m_WrapAround = !!i797[1]
  request.r(i797[2], i797[3], 0, i796, 'm_SelectOnUp')
  request.r(i797[4], i797[5], 0, i796, 'm_SelectOnDown')
  request.r(i797[6], i797[7], 0, i796, 'm_SelectOnLeft')
  request.r(i797[8], i797[9], 0, i796, 'm_SelectOnRight')
  return i796
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i799 = data
  i798.m_NormalColor = new pc.Color(i799[0], i799[1], i799[2], i799[3])
  i798.m_HighlightedColor = new pc.Color(i799[4], i799[5], i799[6], i799[7])
  i798.m_PressedColor = new pc.Color(i799[8], i799[9], i799[10], i799[11])
  i798.m_SelectedColor = new pc.Color(i799[12], i799[13], i799[14], i799[15])
  i798.m_DisabledColor = new pc.Color(i799[16], i799[17], i799[18], i799[19])
  i798.m_ColorMultiplier = i799[20]
  i798.m_FadeDuration = i799[21]
  return i798
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'm_HighlightedSprite')
  request.r(i801[2], i801[3], 0, i800, 'm_PressedSprite')
  request.r(i801[4], i801[5], 0, i800, 'm_SelectedSprite')
  request.r(i801[6], i801[7], 0, i800, 'm_DisabledSprite')
  return i800
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i803 = data
  i802.m_NormalTrigger = i803[0]
  i802.m_HighlightedTrigger = i803[1]
  i802.m_PressedTrigger = i803[2]
  i802.m_SelectedTrigger = i803[3]
  i802.m_DisabledTrigger = i803[4]
  return i802
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'm_FirstSelected')
  i804.m_sendNavigationEvents = !!i805[2]
  i804.m_DragThreshold = i805[3]
  return i804
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i807 = data
  i806.m_HorizontalAxis = i807[0]
  i806.m_VerticalAxis = i807[1]
  i806.m_SubmitButton = i807[2]
  i806.m_CancelButton = i807[3]
  i806.m_InputActionsPerSecond = i807[4]
  i806.m_RepeatDelay = i807[5]
  i806.m_ForceModuleActive = !!i807[6]
  i806.m_SendPointerHoverToParent = !!i807[7]
  return i806
}

Deserializers["Assets.Scripts.Controllers.BackgroundController"] = function (request, data, root) {
  var i808 = root || request.c( 'Assets.Scripts.Controllers.BackgroundController' )
  var i809 = data
  var i811 = i809[0]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i808.tilePrefabs = i810
  i808.gridWidth = i809[1]
  i808.gridHeight = i809[2]
  i808.tileSize = i809[3]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i815 = data
  i814.ambientIntensity = i815[0]
  i814.reflectionIntensity = i815[1]
  i814.ambientMode = i815[2]
  i814.ambientLight = new pc.Color(i815[3], i815[4], i815[5], i815[6])
  i814.ambientSkyColor = new pc.Color(i815[7], i815[8], i815[9], i815[10])
  i814.ambientGroundColor = new pc.Color(i815[11], i815[12], i815[13], i815[14])
  i814.ambientEquatorColor = new pc.Color(i815[15], i815[16], i815[17], i815[18])
  i814.fogColor = new pc.Color(i815[19], i815[20], i815[21], i815[22])
  i814.fogEndDistance = i815[23]
  i814.fogStartDistance = i815[24]
  i814.fogDensity = i815[25]
  i814.fog = !!i815[26]
  request.r(i815[27], i815[28], 0, i814, 'skybox')
  i814.fogMode = i815[29]
  var i817 = i815[30]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i817[i + 0]) );
  }
  i814.lightmaps = i816
  i814.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i815[31], i814.lightProbes)
  i814.lightmapsMode = i815[32]
  i814.mixedBakeMode = i815[33]
  i814.environmentLightingMode = i815[34]
  i814.ambientProbe = new pc.SphericalHarmonicsL2(i815[35])
  i814.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i815[36])
  i814.useReferenceAmbientProbe = !!i815[37]
  request.r(i815[38], i815[39], 0, i814, 'customReflection')
  request.r(i815[40], i815[41], 0, i814, 'defaultReflection')
  i814.defaultReflectionMode = i815[42]
  i814.defaultReflectionResolution = i815[43]
  i814.sunLightObjectId = i815[44]
  i814.pixelLightCount = i815[45]
  i814.defaultReflectionHDR = !!i815[46]
  i814.hasLightDataAsset = !!i815[47]
  i814.hasManualGenerate = !!i815[48]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'lightmapColor')
  request.r(i821[2], i821[3], 0, i820, 'lightmapDirection')
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i822 = root || new UnityEngine.LightProbes()
  var i823 = data
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i831 = data
  var i833 = i831[0]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i833.length; i += 1) {
    i832.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i833[i + 0]));
  }
  i830.ShaderCompilationErrors = i832
  i830.name = i831[1]
  i830.guid = i831[2]
  var i835 = i831[3]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( i835[i + 0] );
  }
  i830.shaderDefinedKeywords = i834
  var i837 = i831[4]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i837[i + 0]) );
  }
  i830.passes = i836
  var i839 = i831[5]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i839[i + 0]) );
  }
  i830.usePasses = i838
  var i841 = i831[6]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i841[i + 0]) );
  }
  i830.defaultParameterValues = i840
  request.r(i831[7], i831[8], 0, i830, 'unityFallbackShader')
  i830.readDepth = !!i831[9]
  i830.isCreatedByShaderGraph = !!i831[10]
  i830.usedBatchUniforms = i831[11]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i845 = data
  i844.shaderName = i845[0]
  i844.errorMessage = i845[1]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i850 = root || new pc.UnityShaderPass()
  var i851 = data
  i850.id = i851[0]
  i850.subShaderIndex = i851[1]
  i850.name = i851[2]
  i850.passType = i851[3]
  i850.grabPassTextureName = i851[4]
  i850.usePass = !!i851[5]
  i850.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[6], i850.zTest)
  i850.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[7], i850.zWrite)
  i850.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[8], i850.culling)
  i850.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i851[9], i850.blending)
  i850.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i851[10], i850.alphaBlending)
  i850.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[11], i850.colorWriteMask)
  i850.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[12], i850.offsetUnits)
  i850.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[13], i850.offsetFactor)
  i850.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[14], i850.stencilRef)
  i850.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[15], i850.stencilReadMask)
  i850.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[16], i850.stencilWriteMask)
  i850.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i851[17], i850.stencilOp)
  i850.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i851[18], i850.stencilOpFront)
  i850.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i851[19], i850.stencilOpBack)
  var i853 = i851[20]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i853[i + 0]) );
  }
  i850.tags = i852
  var i855 = i851[21]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( i855[i + 0] );
  }
  i850.passDefinedKeywords = i854
  var i857 = i851[22]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i857[i + 0]) );
  }
  i850.passDefinedKeywordGroups = i856
  var i859 = i851[23]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i859[i + 0]) );
  }
  i850.variants = i858
  var i861 = i851[24]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i861[i + 0]) );
  }
  i850.excludedVariants = i860
  i850.hasDepthReader = !!i851[25]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i863 = data
  i862.val = i863[0]
  i862.name = i863[1]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i865 = data
  i864.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[0], i864.src)
  i864.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[1], i864.dst)
  i864.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[2], i864.op)
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i867 = data
  i866.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i867[0], i866.pass)
  i866.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i867[1], i866.fail)
  i866.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i867[2], i866.zFail)
  i866.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i867[3], i866.comp)
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i871 = data
  i870.name = i871[0]
  i870.value = i871[1]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i875 = data
  var i877 = i875[0]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( i877[i + 0] );
  }
  i874.keywords = i876
  i874.hasDiscard = !!i875[1]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i881 = data
  i880.passId = i881[0]
  i880.subShaderIndex = i881[1]
  var i883 = i881[2]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( i883[i + 0] );
  }
  i880.keywords = i882
  i880.vertexProgram = i881[3]
  i880.fragmentProgram = i881[4]
  i880.compiledForWebGL2 = !!i881[5]
  i880.readDepth = !!i881[6]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'shader')
  i886.pass = i887[2]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i891 = data
  i890.name = i891[0]
  i890.type = i891[1]
  i890.value = new pc.Vec4( i891[2], i891[3], i891[4], i891[5] )
  i890.textureValue = i891[6]
  i890.shaderPropertyFlag = i891[7]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i893 = data
  i892.name = i893[0]
  request.r(i893[1], i893[2], 0, i892, 'texture')
  i892.aabb = i893[3]
  i892.vertices = i893[4]
  i892.triangles = i893[5]
  i892.textureRect = UnityEngine.Rect.MinMaxRect(i893[6], i893[7], i893[8], i893[9])
  i892.packedRect = UnityEngine.Rect.MinMaxRect(i893[10], i893[11], i893[12], i893[13])
  i892.border = new pc.Vec4( i893[14], i893[15], i893[16], i893[17] )
  i892.transparency = i893[18]
  i892.bounds = i893[19]
  i892.pixelsPerUnit = i893[20]
  i892.textureWidth = i893[21]
  i892.textureHeight = i893[22]
  i892.nativeSize = new pc.Vec2( i893[23], i893[24] )
  i892.pivot = new pc.Vec2( i893[25], i893[26] )
  i892.textureRectOffset = new pc.Vec2( i893[27], i893[28] )
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i895 = data
  i894.name = i895[0]
  i894.wrapMode = i895[1]
  i894.isLooping = !!i895[2]
  i894.length = i895[3]
  var i897 = i895[4]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i897[i + 0]) );
  }
  i894.curves = i896
  var i899 = i895[5]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i899[i + 0]) );
  }
  i894.events = i898
  i894.halfPrecision = !!i895[6]
  i894._frameRate = i895[7]
  i894.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i895[8], i894.localBounds)
  i894.hasMuscleCurves = !!i895[9]
  var i901 = i895[10]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i894.clipMuscleConstant = i900
  i894.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i895[11], i894.clipBindingConstant)
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i905 = data
  i904.path = i905[0]
  i904.hash = i905[1]
  i904.componentType = i905[2]
  i904.property = i905[3]
  i904.keys = i905[4]
  var i907 = i905[5]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i907[i + 0]) );
  }
  i904.objectReferenceKeys = i906
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i911 = data
  i910.time = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'value')
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i915 = data
  i914.functionName = i915[0]
  i914.floatParameter = i915[1]
  i914.intParameter = i915[2]
  i914.stringParameter = i915[3]
  request.r(i915[4], i915[5], 0, i914, 'objectReferenceParameter')
  i914.time = i915[6]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i917 = data
  i916.center = new pc.Vec3( i917[0], i917[1], i917[2] )
  i916.extends = new pc.Vec3( i917[3], i917[4], i917[5] )
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i921 = data
  var i923 = i921[0]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( i923[i + 0] );
  }
  i920.genericBindings = i922
  var i925 = i921[1]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( i925[i + 0] );
  }
  i920.pptrCurveMapping = i924
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i927 = data
  i926.name = i927[0]
  i926.ascent = i927[1]
  i926.originalLineHeight = i927[2]
  i926.fontSize = i927[3]
  var i929 = i927[4]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i929[i + 0]) );
  }
  i926.characterInfo = i928
  request.r(i927[5], i927[6], 0, i926, 'texture')
  i926.originalFontSize = i927[7]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i933 = data
  i932.index = i933[0]
  i932.advance = i933[1]
  i932.bearing = i933[2]
  i932.glyphWidth = i933[3]
  i932.glyphHeight = i933[4]
  i932.minX = i933[5]
  i932.maxX = i933[6]
  i932.minY = i933[7]
  i932.maxY = i933[8]
  i932.uvBottomLeftX = i933[9]
  i932.uvBottomLeftY = i933[10]
  i932.uvBottomRightX = i933[11]
  i932.uvBottomRightY = i933[12]
  i932.uvTopLeftX = i933[13]
  i932.uvTopLeftY = i933[14]
  i932.uvTopRightX = i933[15]
  i932.uvTopRightY = i933[16]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i935 = data
  i934.name = i935[0]
  var i937 = i935[1]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i937[i + 0]) );
  }
  i934.layers = i936
  var i939 = i935[2]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i939[i + 0]) );
  }
  i934.parameters = i938
  i934.animationClips = i935[3]
  i934.avatarUnsupported = i935[4]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i943 = data
  i942.name = i943[0]
  i942.defaultWeight = i943[1]
  i942.blendingMode = i943[2]
  i942.avatarMask = i943[3]
  i942.syncedLayerIndex = i943[4]
  i942.syncedLayerAffectsTiming = !!i943[5]
  i942.syncedLayers = i943[6]
  i942.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i943[7], i942.stateMachine)
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i945 = data
  i944.id = i945[0]
  i944.name = i945[1]
  i944.path = i945[2]
  var i947 = i945[3]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i947[i + 0]) );
  }
  i944.states = i946
  var i949 = i945[4]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i949[i + 0]) );
  }
  i944.machines = i948
  var i951 = i945[5]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i951[i + 0]) );
  }
  i944.entryStateTransitions = i950
  var i953 = i945[6]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i953[i + 0]) );
  }
  i944.exitStateTransitions = i952
  var i955 = i945[7]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i955[i + 0]) );
  }
  i944.anyStateTransitions = i954
  i944.defaultStateId = i945[8]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i959 = data
  i958.id = i959[0]
  i958.name = i959[1]
  i958.cycleOffset = i959[2]
  i958.cycleOffsetParameter = i959[3]
  i958.cycleOffsetParameterActive = !!i959[4]
  i958.mirror = !!i959[5]
  i958.mirrorParameter = i959[6]
  i958.mirrorParameterActive = !!i959[7]
  i958.motionId = i959[8]
  i958.nameHash = i959[9]
  i958.fullPathHash = i959[10]
  i958.speed = i959[11]
  i958.speedParameter = i959[12]
  i958.speedParameterActive = !!i959[13]
  i958.tag = i959[14]
  i958.tagHash = i959[15]
  i958.writeDefaultValues = !!i959[16]
  var i961 = i959[17]
  var i960 = []
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 2, i960, '')
  }
  i958.behaviours = i960
  var i963 = i959[18]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i963[i + 0]) );
  }
  i958.transitions = i962
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i969 = data
  i968.fullPath = i969[0]
  i968.canTransitionToSelf = !!i969[1]
  i968.duration = i969[2]
  i968.exitTime = i969[3]
  i968.hasExitTime = !!i969[4]
  i968.hasFixedDuration = !!i969[5]
  i968.interruptionSource = i969[6]
  i968.offset = i969[7]
  i968.orderedInterruption = !!i969[8]
  i968.destinationStateId = i969[9]
  i968.isExit = !!i969[10]
  i968.mute = !!i969[11]
  i968.solo = !!i969[12]
  var i971 = i969[13]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i971[i + 0]) );
  }
  i968.conditions = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i977 = data
  i976.destinationStateId = i977[0]
  i976.isExit = !!i977[1]
  i976.mute = !!i977[2]
  i976.solo = !!i977[3]
  var i979 = i977[4]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i979[i + 0]) );
  }
  i976.conditions = i978
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i983 = data
  i982.defaultBool = !!i983[0]
  i982.defaultFloat = i983[1]
  i982.defaultInt = i983[2]
  i982.name = i983[3]
  i982.nameHash = i983[4]
  i982.type = i983[5]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i987 = data
  i986.mode = i987[0]
  i986.parameter = i987[1]
  i986.threshold = i987[2]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i989 = data
  i988.name = i989[0]
  i988.bytes64 = i989[1]
  i988.data = i989[2]
  return i988
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i991 = data
  i990.hashCode = i991[0]
  request.r(i991[1], i991[2], 0, i990, 'material')
  i990.materialHashCode = i991[3]
  request.r(i991[4], i991[5], 0, i990, 'atlas')
  i990.normalStyle = i991[6]
  i990.normalSpacingOffset = i991[7]
  i990.boldStyle = i991[8]
  i990.boldSpacing = i991[9]
  i990.italicStyle = i991[10]
  i990.tabSize = i991[11]
  i990.m_Version = i991[12]
  i990.m_SourceFontFileGUID = i991[13]
  request.r(i991[14], i991[15], 0, i990, 'm_SourceFontFile_EditorRef')
  request.r(i991[16], i991[17], 0, i990, 'm_SourceFontFile')
  i990.m_AtlasPopulationMode = i991[18]
  i990.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i991[19], i990.m_FaceInfo)
  var i993 = i991[20]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('UnityEngine.TextCore.Glyph', i993[i + 0]));
  }
  i990.m_GlyphTable = i992
  var i995 = i991[21]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i995.length; i += 1) {
    i994.add(request.d('TMPro.TMP_Character', i995[i + 0]));
  }
  i990.m_CharacterTable = i994
  var i997 = i991[22]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i990.m_AtlasTextures = i996
  i990.m_AtlasTextureIndex = i991[23]
  i990.m_IsMultiAtlasTexturesEnabled = !!i991[24]
  i990.m_ClearDynamicDataOnBuild = !!i991[25]
  var i999 = i991[26]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i999.length; i += 1) {
    i998.add(request.d('UnityEngine.TextCore.GlyphRect', i999[i + 0]));
  }
  i990.m_UsedGlyphRects = i998
  var i1001 = i991[27]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.add(request.d('UnityEngine.TextCore.GlyphRect', i1001[i + 0]));
  }
  i990.m_FreeGlyphRects = i1000
  i990.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i991[28], i990.m_fontInfo)
  i990.m_AtlasWidth = i991[29]
  i990.m_AtlasHeight = i991[30]
  i990.m_AtlasPadding = i991[31]
  i990.m_AtlasRenderMode = i991[32]
  var i1003 = i991[33]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.add(request.d('TMPro.TMP_Glyph', i1003[i + 0]));
  }
  i990.m_glyphInfoList = i1002
  i990.m_KerningTable = request.d('TMPro.KerningTable', i991[34], i990.m_KerningTable)
  i990.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i991[35], i990.m_FontFeatureTable)
  var i1005 = i991[36]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 1, i1004, '')
  }
  i990.fallbackFontAssets = i1004
  var i1007 = i991[37]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 1, i1006, '')
  }
  i990.m_FallbackFontAssetTable = i1006
  i990.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i991[38], i990.m_CreationSettings)
  var i1009 = i991[39]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('TMPro.TMP_FontWeightPair', i1009[i + 0]) );
  }
  i990.m_FontWeightTable = i1008
  var i1011 = i991[40]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('TMPro.TMP_FontWeightPair', i1011[i + 0]) );
  }
  i990.fontWeights = i1010
  return i990
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1013 = data
  i1012.m_FaceIndex = i1013[0]
  i1012.m_FamilyName = i1013[1]
  i1012.m_StyleName = i1013[2]
  i1012.m_PointSize = i1013[3]
  i1012.m_Scale = i1013[4]
  i1012.m_UnitsPerEM = i1013[5]
  i1012.m_LineHeight = i1013[6]
  i1012.m_AscentLine = i1013[7]
  i1012.m_CapLine = i1013[8]
  i1012.m_MeanLine = i1013[9]
  i1012.m_Baseline = i1013[10]
  i1012.m_DescentLine = i1013[11]
  i1012.m_SuperscriptOffset = i1013[12]
  i1012.m_SuperscriptSize = i1013[13]
  i1012.m_SubscriptOffset = i1013[14]
  i1012.m_SubscriptSize = i1013[15]
  i1012.m_UnderlineOffset = i1013[16]
  i1012.m_UnderlineThickness = i1013[17]
  i1012.m_StrikethroughOffset = i1013[18]
  i1012.m_StrikethroughThickness = i1013[19]
  i1012.m_TabWidth = i1013[20]
  return i1012
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1017 = data
  i1016.m_Index = i1017[0]
  i1016.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1017[1], i1016.m_Metrics)
  i1016.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1017[2], i1016.m_GlyphRect)
  i1016.m_Scale = i1017[3]
  i1016.m_AtlasIndex = i1017[4]
  i1016.m_ClassDefinitionType = i1017[5]
  return i1016
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1019 = data
  i1018.m_Width = i1019[0]
  i1018.m_Height = i1019[1]
  i1018.m_HorizontalBearingX = i1019[2]
  i1018.m_HorizontalBearingY = i1019[3]
  i1018.m_HorizontalAdvance = i1019[4]
  return i1018
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1021 = data
  i1020.m_X = i1021[0]
  i1020.m_Y = i1021[1]
  i1020.m_Width = i1021[2]
  i1020.m_Height = i1021[3]
  return i1020
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1024 = root || request.c( 'TMPro.TMP_Character' )
  var i1025 = data
  i1024.m_ElementType = i1025[0]
  i1024.m_Unicode = i1025[1]
  i1024.m_GlyphIndex = i1025[2]
  i1024.m_Scale = i1025[3]
  return i1024
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1030 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1031 = data
  i1030.Name = i1031[0]
  i1030.PointSize = i1031[1]
  i1030.Scale = i1031[2]
  i1030.CharacterCount = i1031[3]
  i1030.LineHeight = i1031[4]
  i1030.Baseline = i1031[5]
  i1030.Ascender = i1031[6]
  i1030.CapHeight = i1031[7]
  i1030.Descender = i1031[8]
  i1030.CenterLine = i1031[9]
  i1030.SuperscriptOffset = i1031[10]
  i1030.SubscriptOffset = i1031[11]
  i1030.SubSize = i1031[12]
  i1030.Underline = i1031[13]
  i1030.UnderlineThickness = i1031[14]
  i1030.strikethrough = i1031[15]
  i1030.strikethroughThickness = i1031[16]
  i1030.TabWidth = i1031[17]
  i1030.Padding = i1031[18]
  i1030.AtlasWidth = i1031[19]
  i1030.AtlasHeight = i1031[20]
  return i1030
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1034 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1035 = data
  i1034.id = i1035[0]
  i1034.x = i1035[1]
  i1034.y = i1035[2]
  i1034.width = i1035[3]
  i1034.height = i1035[4]
  i1034.xOffset = i1035[5]
  i1034.yOffset = i1035[6]
  i1034.xAdvance = i1035[7]
  i1034.scale = i1035[8]
  return i1034
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1036 = root || request.c( 'TMPro.KerningTable' )
  var i1037 = data
  var i1039 = i1037[0]
  var i1038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.add(request.d('TMPro.KerningPair', i1039[i + 0]));
  }
  i1036.kerningPairs = i1038
  return i1036
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.KerningPair' )
  var i1043 = data
  i1042.xOffset = i1043[0]
  i1042.m_FirstGlyph = i1043[1]
  i1042.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1043[2], i1042.m_FirstGlyphAdjustments)
  i1042.m_SecondGlyph = i1043[3]
  i1042.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1043[4], i1042.m_SecondGlyphAdjustments)
  i1042.m_IgnoreSpacingAdjustments = !!i1043[5]
  return i1042
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1045 = data
  var i1047 = i1045[0]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1047[i + 0]));
  }
  i1044.m_GlyphPairAdjustmentRecords = i1046
  return i1044
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1051 = data
  i1050.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1051[0], i1050.m_FirstAdjustmentRecord)
  i1050.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1051[1], i1050.m_SecondAdjustmentRecord)
  i1050.m_FeatureLookupFlags = i1051[2]
  return i1050
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1052 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1053 = data
  i1052.m_GlyphIndex = i1053[0]
  i1052.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1053[1], i1052.m_GlyphValueRecord)
  return i1052
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1054 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1055 = data
  i1054.m_XPlacement = i1055[0]
  i1054.m_YPlacement = i1055[1]
  i1054.m_XAdvance = i1055[2]
  i1054.m_YAdvance = i1055[3]
  return i1054
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1059 = data
  i1058.sourceFontFileName = i1059[0]
  i1058.sourceFontFileGUID = i1059[1]
  i1058.pointSizeSamplingMode = i1059[2]
  i1058.pointSize = i1059[3]
  i1058.padding = i1059[4]
  i1058.packingMode = i1059[5]
  i1058.atlasWidth = i1059[6]
  i1058.atlasHeight = i1059[7]
  i1058.characterSetSelectionMode = i1059[8]
  i1058.characterSequence = i1059[9]
  i1058.referencedFontAssetGUID = i1059[10]
  i1058.referencedTextAssetGUID = i1059[11]
  i1058.fontStyle = i1059[12]
  i1058.fontStyleModifier = i1059[13]
  i1058.renderMode = i1059[14]
  i1058.includeFontFeatures = !!i1059[15]
  return i1058
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1062 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'regularTypeface')
  request.r(i1063[2], i1063[3], 0, i1062, 'italicTypeface')
  return i1062
}

Deserializers["EnemyInfos"] = function (request, data, root) {
  var i1064 = root || request.c( 'EnemyInfos' )
  var i1065 = data
  var i1067 = i1065[0]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('EnemyInfosSet', i1067[i + 0]) );
  }
  i1064.enemyInfosSet = i1066
  return i1064
}

Deserializers["EnemyInfosSet"] = function (request, data, root) {
  var i1070 = root || request.c( 'EnemyInfosSet' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'body')
  request.r(i1071[2], i1071[3], 0, i1070, 'leftLeg')
  request.r(i1071[4], i1071[5], 0, i1070, 'rightLeg')
  request.r(i1071[6], i1071[7], 0, i1070, 'countryFlag')
  i1070.enemyName = i1071[8]
  return i1070
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1072 = root || request.c( 'TMPro.TMP_Settings' )
  var i1073 = data
  i1072.m_enableWordWrapping = !!i1073[0]
  i1072.m_enableKerning = !!i1073[1]
  i1072.m_enableExtraPadding = !!i1073[2]
  i1072.m_enableTintAllSprites = !!i1073[3]
  i1072.m_enableParseEscapeCharacters = !!i1073[4]
  i1072.m_EnableRaycastTarget = !!i1073[5]
  i1072.m_GetFontFeaturesAtRuntime = !!i1073[6]
  i1072.m_missingGlyphCharacter = i1073[7]
  i1072.m_warningsDisabled = !!i1073[8]
  request.r(i1073[9], i1073[10], 0, i1072, 'm_defaultFontAsset')
  i1072.m_defaultFontAssetPath = i1073[11]
  i1072.m_defaultFontSize = i1073[12]
  i1072.m_defaultAutoSizeMinRatio = i1073[13]
  i1072.m_defaultAutoSizeMaxRatio = i1073[14]
  i1072.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1073[15], i1073[16] )
  i1072.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1073[17], i1073[18] )
  i1072.m_autoSizeTextContainer = !!i1073[19]
  i1072.m_IsTextObjectScaleStatic = !!i1073[20]
  var i1075 = i1073[21]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1075.length; i += 2) {
  request.r(i1075[i + 0], i1075[i + 1], 1, i1074, '')
  }
  i1072.m_fallbackFontAssets = i1074
  i1072.m_matchMaterialPreset = !!i1073[22]
  request.r(i1073[23], i1073[24], 0, i1072, 'm_defaultSpriteAsset')
  i1072.m_defaultSpriteAssetPath = i1073[25]
  i1072.m_enableEmojiSupport = !!i1073[26]
  i1072.m_MissingCharacterSpriteUnicode = i1073[27]
  i1072.m_defaultColorGradientPresetsPath = i1073[28]
  request.r(i1073[29], i1073[30], 0, i1072, 'm_defaultStyleSheet')
  i1072.m_StyleSheetsResourcePath = i1073[31]
  request.r(i1073[32], i1073[33], 0, i1072, 'm_leadingCharacters')
  request.r(i1073[34], i1073[35], 0, i1072, 'm_followingCharacters')
  i1072.m_UseModernHangulLineBreakingRules = !!i1073[36]
  return i1072
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1076 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1077 = data
  i1076.hashCode = i1077[0]
  request.r(i1077[1], i1077[2], 0, i1076, 'material')
  i1076.materialHashCode = i1077[3]
  request.r(i1077[4], i1077[5], 0, i1076, 'spriteSheet')
  var i1079 = i1077[6]
  var i1078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.add(request.d('TMPro.TMP_Sprite', i1079[i + 0]));
  }
  i1076.spriteInfoList = i1078
  var i1081 = i1077[7]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 1, i1080, '')
  }
  i1076.fallbackSpriteAssets = i1080
  i1076.m_Version = i1077[8]
  i1076.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1077[9], i1076.m_FaceInfo)
  var i1083 = i1077[10]
  var i1082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.add(request.d('TMPro.TMP_SpriteCharacter', i1083[i + 0]));
  }
  i1076.m_SpriteCharacterTable = i1082
  var i1085 = i1077[11]
  var i1084 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.add(request.d('TMPro.TMP_SpriteGlyph', i1085[i + 0]));
  }
  i1076.m_SpriteGlyphTable = i1084
  return i1076
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1088 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1089 = data
  i1088.name = i1089[0]
  i1088.hashCode = i1089[1]
  i1088.unicode = i1089[2]
  i1088.pivot = new pc.Vec2( i1089[3], i1089[4] )
  request.r(i1089[5], i1089[6], 0, i1088, 'sprite')
  i1088.id = i1089[7]
  i1088.x = i1089[8]
  i1088.y = i1089[9]
  i1088.width = i1089[10]
  i1088.height = i1089[11]
  i1088.xOffset = i1089[12]
  i1088.yOffset = i1089[13]
  i1088.xAdvance = i1089[14]
  i1088.scale = i1089[15]
  return i1088
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1094 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1095 = data
  i1094.m_Name = i1095[0]
  i1094.m_HashCode = i1095[1]
  i1094.m_ElementType = i1095[2]
  i1094.m_Unicode = i1095[3]
  i1094.m_GlyphIndex = i1095[4]
  i1094.m_Scale = i1095[5]
  return i1094
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1098 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'sprite')
  i1098.m_Index = i1099[2]
  i1098.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1099[3], i1098.m_Metrics)
  i1098.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1099[4], i1098.m_GlyphRect)
  i1098.m_Scale = i1099[5]
  i1098.m_AtlasIndex = i1099[6]
  i1098.m_ClassDefinitionType = i1099[7]
  return i1098
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1101 = data
  var i1103 = i1101[0]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.add(request.d('TMPro.TMP_Style', i1103[i + 0]));
  }
  i1100.m_StyleList = i1102
  return i1100
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1106 = root || request.c( 'TMPro.TMP_Style' )
  var i1107 = data
  i1106.m_Name = i1107[0]
  i1106.m_HashCode = i1107[1]
  i1106.m_OpeningDefinition = i1107[2]
  i1106.m_ClosingDefinition = i1107[3]
  i1106.m_OpeningTagArray = i1107[4]
  i1106.m_ClosingTagArray = i1107[5]
  i1106.m_OpeningTagUnicodeArray = i1107[6]
  i1106.m_ClosingTagUnicodeArray = i1107[7]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1109 = data
  var i1111 = i1109[0]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1111[i + 0]) );
  }
  i1108.files = i1110
  i1108.componentToPrefabIds = i1109[1]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1115 = data
  i1114.path = i1115[0]
  request.r(i1115[1], i1115[2], 0, i1114, 'unityObject')
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1117 = data
  var i1119 = i1117[0]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1119[i + 0]) );
  }
  i1116.scriptsExecutionOrder = i1118
  var i1121 = i1117[1]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1121[i + 0]) );
  }
  i1116.sortingLayers = i1120
  var i1123 = i1117[2]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1123[i + 0]) );
  }
  i1116.cullingLayers = i1122
  i1116.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1117[3], i1116.timeSettings)
  i1116.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1117[4], i1116.physicsSettings)
  i1116.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1117[5], i1116.physics2DSettings)
  i1116.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1117[6], i1116.qualitySettings)
  i1116.enableRealtimeShadows = !!i1117[7]
  i1116.enableAutoInstancing = !!i1117[8]
  i1116.enableDynamicBatching = !!i1117[9]
  i1116.lightmapEncodingQuality = i1117[10]
  i1116.desiredColorSpace = i1117[11]
  var i1125 = i1117[12]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( i1125[i + 0] );
  }
  i1116.allTags = i1124
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1129 = data
  i1128.name = i1129[0]
  i1128.value = i1129[1]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1133 = data
  i1132.id = i1133[0]
  i1132.name = i1133[1]
  i1132.value = i1133[2]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1137 = data
  i1136.id = i1137[0]
  i1136.name = i1137[1]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1139 = data
  i1138.fixedDeltaTime = i1139[0]
  i1138.maximumDeltaTime = i1139[1]
  i1138.timeScale = i1139[2]
  i1138.maximumParticleTimestep = i1139[3]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1141 = data
  i1140.gravity = new pc.Vec3( i1141[0], i1141[1], i1141[2] )
  i1140.defaultSolverIterations = i1141[3]
  i1140.bounceThreshold = i1141[4]
  i1140.autoSyncTransforms = !!i1141[5]
  i1140.autoSimulation = !!i1141[6]
  var i1143 = i1141[7]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1143[i + 0]) );
  }
  i1140.collisionMatrix = i1142
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1147 = data
  i1146.enabled = !!i1147[0]
  i1146.layerId = i1147[1]
  i1146.otherLayerId = i1147[2]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'material')
  i1148.gravity = new pc.Vec2( i1149[2], i1149[3] )
  i1148.positionIterations = i1149[4]
  i1148.velocityIterations = i1149[5]
  i1148.velocityThreshold = i1149[6]
  i1148.maxLinearCorrection = i1149[7]
  i1148.maxAngularCorrection = i1149[8]
  i1148.maxTranslationSpeed = i1149[9]
  i1148.maxRotationSpeed = i1149[10]
  i1148.baumgarteScale = i1149[11]
  i1148.baumgarteTOIScale = i1149[12]
  i1148.timeToSleep = i1149[13]
  i1148.linearSleepTolerance = i1149[14]
  i1148.angularSleepTolerance = i1149[15]
  i1148.defaultContactOffset = i1149[16]
  i1148.autoSimulation = !!i1149[17]
  i1148.queriesHitTriggers = !!i1149[18]
  i1148.queriesStartInColliders = !!i1149[19]
  i1148.callbacksOnDisable = !!i1149[20]
  i1148.reuseCollisionCallbacks = !!i1149[21]
  i1148.autoSyncTransforms = !!i1149[22]
  var i1151 = i1149[23]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1151[i + 0]) );
  }
  i1148.collisionMatrix = i1150
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1155 = data
  i1154.enabled = !!i1155[0]
  i1154.layerId = i1155[1]
  i1154.otherLayerId = i1155[2]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1159[i + 0]) );
  }
  i1156.qualityLevels = i1158
  var i1161 = i1157[1]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( i1161[i + 0] );
  }
  i1156.names = i1160
  i1156.shadows = i1157[2]
  i1156.anisotropicFiltering = i1157[3]
  i1156.antiAliasing = i1157[4]
  i1156.lodBias = i1157[5]
  i1156.shadowCascades = i1157[6]
  i1156.shadowDistance = i1157[7]
  i1156.shadowmaskMode = i1157[8]
  i1156.shadowProjection = i1157[9]
  i1156.shadowResolution = i1157[10]
  i1156.softParticles = !!i1157[11]
  i1156.softVegetation = !!i1157[12]
  i1156.activeColorSpace = i1157[13]
  i1156.desiredColorSpace = i1157[14]
  i1156.masterTextureLimit = i1157[15]
  i1156.maxQueuedFrames = i1157[16]
  i1156.particleRaycastBudget = i1157[17]
  i1156.pixelLightCount = i1157[18]
  i1156.realtimeReflectionProbes = !!i1157[19]
  i1156.shadowCascade2Split = i1157[20]
  i1156.shadowCascade4Split = new pc.Vec3( i1157[21], i1157[22], i1157[23] )
  i1156.streamingMipmapsActive = !!i1157[24]
  i1156.vSyncCount = i1157[25]
  i1156.asyncUploadBufferSize = i1157[26]
  i1156.asyncUploadTimeSlice = i1157[27]
  i1156.billboardsFaceCameraPosition = !!i1157[28]
  i1156.shadowNearPlaneOffset = i1157[29]
  i1156.streamingMipmapsMemoryBudget = i1157[30]
  i1156.maximumLODLevel = i1157[31]
  i1156.streamingMipmapsAddAllCameras = !!i1157[32]
  i1156.streamingMipmapsMaxLevelReduction = i1157[33]
  i1156.streamingMipmapsRenderersPerFrame = i1157[34]
  i1156.resolutionScalingFixedDPIFactor = i1157[35]
  i1156.streamingMipmapsMaxFileIORequests = i1157[36]
  i1156.currentQualityLevel = i1157[37]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1167 = data
  i1166.weight = i1167[0]
  i1166.vertices = i1167[1]
  i1166.normals = i1167[2]
  i1166.tangents = i1167[3]
  return i1166
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1169 = data
  request.r(i1169[0], i1169[1], 0, i1168, 'm_ObjectArgument')
  i1168.m_ObjectArgumentAssemblyTypeName = i1169[2]
  i1168.m_IntArgument = i1169[3]
  i1168.m_FloatArgument = i1169[4]
  i1168.m_StringArgument = i1169[5]
  i1168.m_BoolArgument = !!i1169[6]
  return i1168
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1170 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1171 = data
  i1170.xPlacement = i1171[0]
  i1170.yPlacement = i1171[1]
  i1170.xAdvance = i1171[2]
  i1170.yAdvance = i1171[3]
  return i1170
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[38],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[71],"78":[11],"79":[11],"80":[11],"81":[11],"82":[11],"83":[11],"84":[11],"85":[11],"86":[11],"87":[11],"88":[11],"89":[11],"90":[11],"91":[38],"92":[35],"93":[94],"95":[94],"22":[21],"96":[25],"97":[98],"99":[4],"100":[98],"101":[21],"102":[21],"25":[22],"18":[26,21],"103":[21],"24":[22],"104":[21],"105":[21],"106":[21],"107":[21],"108":[21],"109":[21],"110":[21],"28":[21],"111":[21],"112":[26,21],"113":[21],"114":[21],"115":[21],"116":[21],"117":[26,21],"118":[21],"119":[52],"120":[52],"53":[52],"121":[52],"122":[38],"123":[38],"124":[125],"126":[38],"127":[98]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","ItemCollisionController","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Shader","Assets.Scripts.Controllers.SwordCollisionController","UnityEngine.Rigidbody2D","UnityEngine.PolygonCollider2D","Assets.Scripts.Controllers.ScratchController","Assets.Scripts.Controllers.EnemyInfosController","EnemyInfos","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","Assets.Scripts.Controllers.EnemyHealthController","Assets.Scripts.Managers.EnemyStateManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","Assets.Scripts.Controllers.SwordRotateController","UnityEngine.Texture2D","UnityEngine.BoxCollider2D","ScratchCardAsset.ScratchCardManager","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Camera","Assets.Scripts.Signals.PoolSignals","Assets.Scripts.Signals.PlayerSignals","Assets.Scripts.Signals.GameSignals","Assets.Scripts.Signals.ScratchSignals","PoolManager","PoolController","Assets.Scripts.Managers.PlayerManager","Assets.Scripts.Controllers.PlayerHealthController","Assets.Scripts.Managers.GameManager","GameController","UnityEngine.AudioListener","PlayerMovementController","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Assets.Scripts.Controllers.BackgroundController","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ScratchCardAsset.Core.InputData.CanvasGraphicRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.51f1";

Deserializers.productName = "AppleGrapple";

Deserializers.lunaInitializationTime = "10/25/2024 14:52:10";

Deserializers.lunaDaysRunning = "5.9";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "AppleGrapple";

Deserializers.lunaAppID = "25285";

Deserializers.projectId = "78a7024eb5762b2498a403cdfa677ba7";

Deserializers.packagesInfo = "com.unity.textmeshpro: \ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1918";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3244";

Deserializers.runtimeAnalysisExcludedModules = "particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "iOS";

Deserializers.applicationIdentifier = "com.DefaultCompany.AppleGrapple";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "ab630b30-7389-425b-975d-c717e72aaedb";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

