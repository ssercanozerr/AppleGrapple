var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.JointSpring' )
  var i439 = data
  i438.spring = i439[0]
  i438.damper = i439[1]
  i438.targetPosition = i439[2]
  return i438
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointMotor' )
  var i441 = data
  i440.m_TargetVelocity = i441[0]
  i440.m_Force = i441[1]
  i440.m_FreeSpin = i441[2]
  return i440
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointLimits' )
  var i443 = data
  i442.m_Min = i443[0]
  i442.m_Max = i443[1]
  i442.m_Bounciness = i443[2]
  i442.m_BounceMinVelocity = i443[3]
  i442.m_ContactDistance = i443[4]
  i442.minBounce = i443[5]
  i442.maxBounce = i443[6]
  return i442
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointDrive' )
  var i445 = data
  i444.m_PositionSpring = i445[0]
  i444.m_PositionDamper = i445[1]
  i444.m_MaximumForce = i445[2]
  i444.m_UseAcceleration = i445[3]
  return i444
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i447 = data
  i446.m_Spring = i447[0]
  i446.m_Damper = i447[1]
  return i446
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i449 = data
  i448.m_Limit = i449[0]
  i448.m_Bounciness = i449[1]
  i448.m_ContactDistance = i449[2]
  return i448
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i451 = data
  i450.m_ExtremumSlip = i451[0]
  i450.m_ExtremumValue = i451[1]
  i450.m_AsymptoteSlip = i451[2]
  i450.m_AsymptoteValue = i451[3]
  i450.m_Stiffness = i451[4]
  return i450
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i453 = data
  i452.m_LowerAngle = i453[0]
  i452.m_UpperAngle = i453[1]
  return i452
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i455 = data
  i454.m_MotorSpeed = i455[0]
  i454.m_MaximumMotorTorque = i455[1]
  return i454
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i457 = data
  i456.m_DampingRatio = i457[0]
  i456.m_Frequency = i457[1]
  i456.m_Angle = i457[2]
  return i456
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i459 = data
  i458.m_LowerTranslation = i459[0]
  i458.m_UpperTranslation = i459[1]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i461 = data
  i460.position = new pc.Vec3( i461[0], i461[1], i461[2] )
  i460.scale = new pc.Vec3( i461[3], i461[4], i461[5] )
  i460.rotation = new pc.Quat(i461[6], i461[7], i461[8], i461[9])
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i463 = data
  i462.radius = i463[0]
  i462.enabled = !!i463[1]
  i462.isTrigger = !!i463[2]
  i462.usedByEffector = !!i463[3]
  i462.density = i463[4]
  i462.offset = new pc.Vec2( i463[5], i463[6] )
  request.r(i463[7], i463[8], 0, i462, 'material')
  return i462
}

Deserializers["ItemCollisionController"] = function (request, data, root) {
  var i464 = root || request.c( 'ItemCollisionController' )
  var i465 = data
  i464.radius = i465[0]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i467 = data
  i466.enabled = !!i467[0]
  request.r(i467[1], i467[2], 0, i466, 'sharedMaterial')
  var i469 = i467[3]
  var i468 = []
  for(var i = 0; i < i469.length; i += 2) {
  request.r(i469[i + 0], i469[i + 1], 2, i468, '')
  }
  i466.sharedMaterials = i468
  i466.receiveShadows = !!i467[4]
  i466.shadowCastingMode = i467[5]
  i466.sortingLayerID = i467[6]
  i466.sortingOrder = i467[7]
  i466.lightmapIndex = i467[8]
  i466.lightmapSceneIndex = i467[9]
  i466.lightmapScaleOffset = new pc.Vec4( i467[10], i467[11], i467[12], i467[13] )
  i466.lightProbeUsage = i467[14]
  i466.reflectionProbeUsage = i467[15]
  i466.color = new pc.Color(i467[16], i467[17], i467[18], i467[19])
  request.r(i467[20], i467[21], 0, i466, 'sprite')
  i466.flipX = !!i467[22]
  i466.flipY = !!i467[23]
  i466.drawMode = i467[24]
  i466.size = new pc.Vec2( i467[25], i467[26] )
  i466.tileMode = i467[27]
  i466.adaptiveModeThreshold = i467[28]
  i466.maskInteraction = i467[29]
  i466.spriteSortPoint = i467[30]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i473 = data
  i472.name = i473[0]
  i472.tagId = i473[1]
  i472.enabled = !!i473[2]
  i472.isStatic = !!i473[3]
  i472.layer = i473[4]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i474 = root || new pc.UnityMaterial()
  var i475 = data
  i474.name = i475[0]
  request.r(i475[1], i475[2], 0, i474, 'shader')
  i474.renderQueue = i475[3]
  i474.enableInstancing = !!i475[4]
  var i477 = i475[5]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i477[i + 0]) );
  }
  i474.floatParameters = i476
  var i479 = i475[6]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i479[i + 0]) );
  }
  i474.colorParameters = i478
  var i481 = i475[7]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i481[i + 0]) );
  }
  i474.vectorParameters = i480
  var i483 = i475[8]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i483[i + 0]) );
  }
  i474.textureParameters = i482
  var i485 = i475[9]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i485[i + 0]) );
  }
  i474.materialFlags = i484
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i489 = data
  i488.name = i489[0]
  i488.value = i489[1]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i493 = data
  i492.name = i493[0]
  i492.value = new pc.Color(i493[1], i493[2], i493[3], i493[4])
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i497 = data
  i496.name = i497[0]
  i496.value = new pc.Vec4( i497[1], i497[2], i497[3], i497[4] )
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i501 = data
  i500.name = i501[0]
  request.r(i501[1], i501[2], 0, i500, 'value')
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i505 = data
  i504.name = i505[0]
  i504.enabled = !!i505[1]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i507 = data
  i506.name = i507[0]
  i506.width = i507[1]
  i506.height = i507[2]
  i506.mipmapCount = i507[3]
  i506.anisoLevel = i507[4]
  i506.filterMode = i507[5]
  i506.hdr = !!i507[6]
  i506.format = i507[7]
  i506.wrapMode = i507[8]
  i506.alphaIsTransparency = !!i507[9]
  i506.alphaSource = i507[10]
  i506.graphicsFormat = i507[11]
  i506.sRGBTexture = !!i507[12]
  i506.desiredColorSpace = i507[13]
  i506.wrapU = i507[14]
  i506.wrapV = i507[15]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i509 = data
  i508.enabled = !!i509[0]
  i508.isTrigger = !!i509[1]
  i508.usedByEffector = !!i509[2]
  i508.density = i509[3]
  i508.offset = new pc.Vec2( i509[4], i509[5] )
  request.r(i509[6], i509[7], 0, i508, 'material')
  i508.edgeRadius = i509[8]
  var i511 = i509[9]
  var i510 = []
  for(var i = 0; i < i511.length; i += 2) {
    i510.push( new pc.Vec2( i511[i + 0], i511[i + 1] ) );
  }
  i508.points = i510
  i508.useAdjacentStartPoint = !!i509[10]
  i508.adjacentStartPoint = new pc.Vec2( i509[11], i509[12] )
  i508.useAdjacentEndPoint = !!i509[13]
  i508.adjacentEndPoint = new pc.Vec2( i509[14], i509[15] )
  return i508
}

Deserializers["Assets.Scripts.Controllers.SwordRotateController"] = function (request, data, root) {
  var i514 = root || request.c( 'Assets.Scripts.Controllers.SwordRotateController' )
  var i515 = data
  i514.rotationSpeed = i515[0]
  return i514
}

Deserializers["Assets.Scripts.Controllers.SwordCollisionController"] = function (request, data, root) {
  var i516 = root || request.c( 'Assets.Scripts.Controllers.SwordCollisionController' )
  var i517 = data
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i519 = data
  i518.bodyType = i519[0]
  request.r(i519[1], i519[2], 0, i518, 'material')
  i518.simulated = !!i519[3]
  i518.useAutoMass = !!i519[4]
  i518.mass = i519[5]
  i518.drag = i519[6]
  i518.angularDrag = i519[7]
  i518.gravityScale = i519[8]
  i518.collisionDetectionMode = i519[9]
  i518.sleepMode = i519[10]
  i518.constraints = i519[11]
  return i518
}

Deserializers["Assets.Scripts.Controllers.EnemyController"] = function (request, data, root) {
  var i520 = root || request.c( 'Assets.Scripts.Controllers.EnemyController' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'enemyInfos')
  request.r(i521[2], i521[3], 0, i520, 'body')
  request.r(i521[4], i521[5], 0, i520, 'leftLeg')
  request.r(i521[6], i521[7], 0, i520, 'rightLeg')
  request.r(i521[8], i521[9], 0, i520, 'enemyName')
  request.r(i521[10], i521[11], 0, i520, 'countryFlag')
  return i520
}

Deserializers["Assets.Scripts.Controllers.EnemyHealthController"] = function (request, data, root) {
  var i522 = root || request.c( 'Assets.Scripts.Controllers.EnemyHealthController' )
  var i523 = data
  i522.maxHealth = i523[0]
  request.r(i523[1], i523[2], 0, i522, 'healthBar')
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i525 = data
  i524.pivot = new pc.Vec2( i525[0], i525[1] )
  i524.anchorMin = new pc.Vec2( i525[2], i525[3] )
  i524.anchorMax = new pc.Vec2( i525[4], i525[5] )
  i524.sizeDelta = new pc.Vec2( i525[6], i525[7] )
  i524.anchoredPosition3D = new pc.Vec3( i525[8], i525[9], i525[10] )
  i524.rotation = new pc.Quat(i525[11], i525[12], i525[13], i525[14])
  i524.scale = new pc.Vec3( i525[15], i525[16], i525[17] )
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i527 = data
  i526.enabled = !!i527[0]
  i526.planeDistance = i527[1]
  i526.referencePixelsPerUnit = i527[2]
  i526.isFallbackOverlay = !!i527[3]
  i526.renderMode = i527[4]
  i526.renderOrder = i527[5]
  i526.sortingLayerName = i527[6]
  i526.sortingOrder = i527[7]
  i526.scaleFactor = i527[8]
  request.r(i527[9], i527[10], 0, i526, 'worldCamera')
  i526.overrideSorting = !!i527[11]
  i526.pixelPerfect = !!i527[12]
  i526.targetDisplay = i527[13]
  i526.overridePixelPerfect = !!i527[14]
  return i526
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i529 = data
  i528.m_UiScaleMode = i529[0]
  i528.m_ReferencePixelsPerUnit = i529[1]
  i528.m_ScaleFactor = i529[2]
  i528.m_ReferenceResolution = new pc.Vec2( i529[3], i529[4] )
  i528.m_ScreenMatchMode = i529[5]
  i528.m_MatchWidthOrHeight = i529[6]
  i528.m_PhysicalUnit = i529[7]
  i528.m_FallbackScreenDPI = i529[8]
  i528.m_DefaultSpriteDPI = i529[9]
  i528.m_DynamicPixelsPerUnit = i529[10]
  i528.m_PresetInfoIsWorld = !!i529[11]
  return i528
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i531 = data
  i530.m_IgnoreReversedGraphics = !!i531[0]
  i530.m_BlockingObjects = i531[1]
  i530.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i531[2] )
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i533 = data
  i532.cullTransparentMesh = !!i533[0]
  return i532
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i534 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i535 = data
  i534.m_hasFontAssetChanged = !!i535[0]
  request.r(i535[1], i535[2], 0, i534, 'm_baseMaterial')
  i534.m_maskOffset = new pc.Vec4( i535[3], i535[4], i535[5], i535[6] )
  i534.m_text = i535[7]
  i534.m_isRightToLeft = !!i535[8]
  request.r(i535[9], i535[10], 0, i534, 'm_fontAsset')
  request.r(i535[11], i535[12], 0, i534, 'm_sharedMaterial')
  var i537 = i535[13]
  var i536 = []
  for(var i = 0; i < i537.length; i += 2) {
  request.r(i537[i + 0], i537[i + 1], 2, i536, '')
  }
  i534.m_fontSharedMaterials = i536
  request.r(i535[14], i535[15], 0, i534, 'm_fontMaterial')
  var i539 = i535[16]
  var i538 = []
  for(var i = 0; i < i539.length; i += 2) {
  request.r(i539[i + 0], i539[i + 1], 2, i538, '')
  }
  i534.m_fontMaterials = i538
  i534.m_fontColor32 = UnityEngine.Color32.ConstructColor(i535[17], i535[18], i535[19], i535[20])
  i534.m_fontColor = new pc.Color(i535[21], i535[22], i535[23], i535[24])
  i534.m_enableVertexGradient = !!i535[25]
  i534.m_colorMode = i535[26]
  i534.m_fontColorGradient = request.d('TMPro.VertexGradient', i535[27], i534.m_fontColorGradient)
  request.r(i535[28], i535[29], 0, i534, 'm_fontColorGradientPreset')
  request.r(i535[30], i535[31], 0, i534, 'm_spriteAsset')
  i534.m_tintAllSprites = !!i535[32]
  request.r(i535[33], i535[34], 0, i534, 'm_StyleSheet')
  i534.m_TextStyleHashCode = i535[35]
  i534.m_overrideHtmlColors = !!i535[36]
  i534.m_faceColor = UnityEngine.Color32.ConstructColor(i535[37], i535[38], i535[39], i535[40])
  i534.m_fontSize = i535[41]
  i534.m_fontSizeBase = i535[42]
  i534.m_fontWeight = i535[43]
  i534.m_enableAutoSizing = !!i535[44]
  i534.m_fontSizeMin = i535[45]
  i534.m_fontSizeMax = i535[46]
  i534.m_fontStyle = i535[47]
  i534.m_HorizontalAlignment = i535[48]
  i534.m_VerticalAlignment = i535[49]
  i534.m_textAlignment = i535[50]
  i534.m_characterSpacing = i535[51]
  i534.m_wordSpacing = i535[52]
  i534.m_lineSpacing = i535[53]
  i534.m_lineSpacingMax = i535[54]
  i534.m_paragraphSpacing = i535[55]
  i534.m_charWidthMaxAdj = i535[56]
  i534.m_enableWordWrapping = !!i535[57]
  i534.m_wordWrappingRatios = i535[58]
  i534.m_overflowMode = i535[59]
  request.r(i535[60], i535[61], 0, i534, 'm_linkedTextComponent')
  request.r(i535[62], i535[63], 0, i534, 'parentLinkedComponent')
  i534.m_enableKerning = !!i535[64]
  i534.m_enableExtraPadding = !!i535[65]
  i534.checkPaddingRequired = !!i535[66]
  i534.m_isRichText = !!i535[67]
  i534.m_parseCtrlCharacters = !!i535[68]
  i534.m_isOrthographic = !!i535[69]
  i534.m_isCullingEnabled = !!i535[70]
  i534.m_horizontalMapping = i535[71]
  i534.m_verticalMapping = i535[72]
  i534.m_uvLineOffset = i535[73]
  i534.m_geometrySortingOrder = i535[74]
  i534.m_IsTextObjectScaleStatic = !!i535[75]
  i534.m_VertexBufferAutoSizeReduction = !!i535[76]
  i534.m_useMaxVisibleDescender = !!i535[77]
  i534.m_pageToDisplay = i535[78]
  i534.m_margin = new pc.Vec4( i535[79], i535[80], i535[81], i535[82] )
  i534.m_isUsingLegacyAnimationComponent = !!i535[83]
  i534.m_isVolumetricText = !!i535[84]
  request.r(i535[85], i535[86], 0, i534, 'm_Material')
  i534.m_Maskable = !!i535[87]
  i534.m_Color = new pc.Color(i535[88], i535[89], i535[90], i535[91])
  i534.m_RaycastTarget = !!i535[92]
  i534.m_RaycastPadding = new pc.Vec4( i535[93], i535[94], i535[95], i535[96] )
  return i534
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i540 = root || request.c( 'TMPro.VertexGradient' )
  var i541 = data
  i540.topLeft = new pc.Color(i541[0], i541[1], i541[2], i541[3])
  i540.topRight = new pc.Color(i541[4], i541[5], i541[6], i541[7])
  i540.bottomLeft = new pc.Color(i541[8], i541[9], i541[10], i541[11])
  i540.bottomRight = new pc.Color(i541[12], i541[13], i541[14], i541[15])
  return i540
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.Mask' )
  var i543 = data
  i542.m_ShowMaskGraphic = !!i543[0]
  return i542
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.UI.Image' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'm_Sprite')
  i544.m_Type = i545[2]
  i544.m_PreserveAspect = !!i545[3]
  i544.m_FillCenter = !!i545[4]
  i544.m_FillMethod = i545[5]
  i544.m_FillAmount = i545[6]
  i544.m_FillClockwise = !!i545[7]
  i544.m_FillOrigin = i545[8]
  i544.m_UseSpriteMesh = !!i545[9]
  i544.m_PixelsPerUnitMultiplier = i545[10]
  request.r(i545[11], i545[12], 0, i544, 'm_Material')
  i544.m_Maskable = !!i545[13]
  i544.m_Color = new pc.Color(i545[14], i545[15], i545[16], i545[17])
  i544.m_RaycastTarget = !!i545[18]
  i544.m_RaycastPadding = new pc.Vec4( i545[19], i545[20], i545[21], i545[22] )
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i547 = data
  i546.name = i547[0]
  i546.index = i547[1]
  i546.startup = !!i547[2]
  return i546
}

Deserializers["Assets.Scripts.Signals.PoolSignals"] = function (request, data, root) {
  var i548 = root || request.c( 'Assets.Scripts.Signals.PoolSignals' )
  var i549 = data
  return i548
}

Deserializers["Assets.Scripts.Signals.PlayerSignals"] = function (request, data, root) {
  var i550 = root || request.c( 'Assets.Scripts.Signals.PlayerSignals' )
  var i551 = data
  return i550
}

Deserializers["Assets.Scripts.Signals.EnemySignals"] = function (request, data, root) {
  var i552 = root || request.c( 'Assets.Scripts.Signals.EnemySignals' )
  var i553 = data
  return i552
}

Deserializers["PoolManager"] = function (request, data, root) {
  var i554 = root || request.c( 'PoolManager' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'poolController')
  return i554
}

Deserializers["Assets.Scripts.Managers.PlayerManager"] = function (request, data, root) {
  var i556 = root || request.c( 'Assets.Scripts.Managers.PlayerManager' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'playerHealthController')
  return i556
}

Deserializers["Assets.Scripts.Managers.EnemyManager"] = function (request, data, root) {
  var i558 = root || request.c( 'Assets.Scripts.Managers.EnemyManager' )
  var i559 = data
  return i558
}

Deserializers["PoolController"] = function (request, data, root) {
  var i560 = root || request.c( 'PoolController' )
  var i561 = data
  var i563 = i561[0]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('PoolController+Pool', i563[i + 0]) );
  }
  i560.pools = i562
  return i560
}

Deserializers["PoolController+Pool"] = function (request, data, root) {
  var i566 = root || request.c( 'PoolController+Pool' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'objPrefab')
  i566.poolSize = i567[2]
  i566.increaseAmount = i567[3]
  return i566
}

Deserializers["GameController"] = function (request, data, root) {
  var i568 = root || request.c( 'GameController' )
  var i569 = data
  i568.xMin = i569[0]
  i568.xMax = i569[1]
  i568.yMin = i569[2]
  i568.yMax = i569[3]
  i568.itemCount = i569[4]
  i568.enemyCount = i569[5]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i571 = data
  i570.enabled = !!i571[0]
  i570.aspect = i571[1]
  i570.orthographic = !!i571[2]
  i570.orthographicSize = i571[3]
  i570.backgroundColor = new pc.Color(i571[4], i571[5], i571[6], i571[7])
  i570.nearClipPlane = i571[8]
  i570.farClipPlane = i571[9]
  i570.fieldOfView = i571[10]
  i570.depth = i571[11]
  i570.clearFlags = i571[12]
  i570.cullingMask = i571[13]
  i570.rect = i571[14]
  request.r(i571[15], i571[16], 0, i570, 'targetTexture')
  i570.usePhysicalProperties = !!i571[17]
  i570.focalLength = i571[18]
  i570.sensorSize = new pc.Vec2( i571[19], i571[20] )
  i570.lensShift = new pc.Vec2( i571[21], i571[22] )
  i570.gateFit = i571[23]
  return i570
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i572 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i573 = data
  i572.m_ShowDebugText = !!i573[0]
  i572.m_ShowCameraFrustum = !!i573[1]
  i572.m_IgnoreTimeScale = !!i573[2]
  request.r(i573[3], i573[4], 0, i572, 'm_WorldUpOverride')
  i572.m_UpdateMethod = i573[5]
  i572.m_BlendUpdateMethod = i573[6]
  i572.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i573[7], i572.m_DefaultBlend)
  request.r(i573[8], i573[9], 0, i572, 'm_CustomBlends')
  i572.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i573[10], i572.m_CameraCutEvent)
  i572.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i573[11], i572.m_CameraActivatedEvent)
  return i572
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i574 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i575 = data
  i574.m_Style = i575[0]
  i574.m_Time = i575[1]
  i574.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i575[2] } )
  return i574
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i576 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i577 = data
  i576.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i577[0], i576.m_PersistentCalls)
  return i576
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i579 = data
  var i581 = i579[0]
  var i580 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i581.length; i += 1) {
    i580.add(request.d('UnityEngine.Events.PersistentCall', i581[i + 0]));
  }
  i578.m_Calls = i580
  return i578
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'm_Target')
  i584.m_TargetAssemblyTypeName = i585[2]
  i584.m_MethodName = i585[3]
  i584.m_Mode = i585[4]
  i584.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i585[5], i584.m_Arguments)
  i584.m_CallState = i585[6]
  return i584
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i586 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i587 = data
  i586.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i587[0], i586.m_PersistentCalls)
  return i586
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i588 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'm_LookAt')
  request.r(i589[2], i589[3], 0, i588, 'm_Follow')
  i588.m_Lens = request.d('Cinemachine.LensSettings', i589[4], i588.m_Lens)
  i588.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i589[5], i588.m_Transitions)
  var i591 = i589[6]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( i591[i + 0] );
  }
  i588.m_ExcludedPropertiesInInspector = i590
  var i593 = i589[7]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( i593[i + 0] );
  }
  i588.m_LockStageInInspector = i592
  i588.m_Priority = i589[8]
  i588.m_StandbyUpdate = i589[9]
  i588.m_LegacyBlendHint = i589[10]
  request.r(i589[11], i589[12], 0, i588, 'm_ComponentOwner')
  i588.m_StreamingVersion = i589[13]
  return i588
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i594 = root || request.c( 'Cinemachine.LensSettings' )
  var i595 = data
  i594.FieldOfView = i595[0]
  i594.OrthographicSize = i595[1]
  i594.NearClipPlane = i595[2]
  i594.FarClipPlane = i595[3]
  i594.Dutch = i595[4]
  i594.ModeOverride = i595[5]
  i594.LensShift = new pc.Vec2( i595[6], i595[7] )
  i594.GateFit = i595[8]
  i594.FocusDistance = i595[9]
  i594.m_SensorSize = new pc.Vec2( i595[10], i595[11] )
  return i594
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i596 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i597 = data
  i596.m_BlendHint = i597[0]
  i596.m_InheritPosition = !!i597[1]
  i596.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i597[2], i596.m_OnCameraLive)
  return i596
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i602 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i603 = data
  return i602
}

Deserializers["Cinemachine.CinemachineFramingTransposer"] = function (request, data, root) {
  var i604 = root || request.c( 'Cinemachine.CinemachineFramingTransposer' )
  var i605 = data
  i604.m_TrackedObjectOffset = new pc.Vec3( i605[0], i605[1], i605[2] )
  i604.m_LookaheadTime = i605[3]
  i604.m_LookaheadSmoothing = i605[4]
  i604.m_LookaheadIgnoreY = !!i605[5]
  i604.m_XDamping = i605[6]
  i604.m_YDamping = i605[7]
  i604.m_ZDamping = i605[8]
  i604.m_TargetMovementOnly = !!i605[9]
  i604.m_ScreenX = i605[10]
  i604.m_ScreenY = i605[11]
  i604.m_CameraDistance = i605[12]
  i604.m_DeadZoneWidth = i605[13]
  i604.m_DeadZoneHeight = i605[14]
  i604.m_DeadZoneDepth = i605[15]
  i604.m_UnlimitedSoftZone = !!i605[16]
  i604.m_SoftZoneWidth = i605[17]
  i604.m_SoftZoneHeight = i605[18]
  i604.m_BiasX = i605[19]
  i604.m_BiasY = i605[20]
  i604.m_CenterOnActivate = !!i605[21]
  i604.m_GroupFramingMode = i605[22]
  i604.m_AdjustmentMode = i605[23]
  i604.m_GroupFramingSize = i605[24]
  i604.m_MaxDollyIn = i605[25]
  i604.m_MaxDollyOut = i605[26]
  i604.m_MinimumDistance = i605[27]
  i604.m_MaximumDistance = i605[28]
  i604.m_MinimumFOV = i605[29]
  i604.m_MaximumFOV = i605[30]
  i604.m_MinimumOrthoSize = i605[31]
  i604.m_MaximumOrthoSize = i605[32]
  return i604
}

Deserializers["PlayerMovementController"] = function (request, data, root) {
  var i606 = root || request.c( 'PlayerMovementController' )
  var i607 = data
  i606.speed = i607[0]
  return i606
}

Deserializers["Assets.Scripts.Controllers.PlayerHealthController"] = function (request, data, root) {
  var i608 = root || request.c( 'Assets.Scripts.Controllers.PlayerHealthController' )
  var i609 = data
  i608.maxHealth = i609[0]
  request.r(i609[1], i609[2], 0, i608, 'healthBar')
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i611 = data
  i610.ambientIntensity = i611[0]
  i610.reflectionIntensity = i611[1]
  i610.ambientMode = i611[2]
  i610.ambientLight = new pc.Color(i611[3], i611[4], i611[5], i611[6])
  i610.ambientSkyColor = new pc.Color(i611[7], i611[8], i611[9], i611[10])
  i610.ambientGroundColor = new pc.Color(i611[11], i611[12], i611[13], i611[14])
  i610.ambientEquatorColor = new pc.Color(i611[15], i611[16], i611[17], i611[18])
  i610.fogColor = new pc.Color(i611[19], i611[20], i611[21], i611[22])
  i610.fogEndDistance = i611[23]
  i610.fogStartDistance = i611[24]
  i610.fogDensity = i611[25]
  i610.fog = !!i611[26]
  request.r(i611[27], i611[28], 0, i610, 'skybox')
  i610.fogMode = i611[29]
  var i613 = i611[30]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i613[i + 0]) );
  }
  i610.lightmaps = i612
  i610.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i611[31], i610.lightProbes)
  i610.lightmapsMode = i611[32]
  i610.mixedBakeMode = i611[33]
  i610.environmentLightingMode = i611[34]
  i610.ambientProbe = new pc.SphericalHarmonicsL2(i611[35])
  i610.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i611[36])
  i610.useReferenceAmbientProbe = !!i611[37]
  request.r(i611[38], i611[39], 0, i610, 'customReflection')
  request.r(i611[40], i611[41], 0, i610, 'defaultReflection')
  i610.defaultReflectionMode = i611[42]
  i610.defaultReflectionResolution = i611[43]
  i610.sunLightObjectId = i611[44]
  i610.pixelLightCount = i611[45]
  i610.defaultReflectionHDR = !!i611[46]
  i610.hasLightDataAsset = !!i611[47]
  i610.hasManualGenerate = !!i611[48]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'lightmapColor')
  request.r(i617[2], i617[3], 0, i616, 'lightmapDirection')
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i618 = root || new UnityEngine.LightProbes()
  var i619 = data
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i627 = data
  var i629 = i627[0]
  var i628 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i629.length; i += 1) {
    i628.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i629[i + 0]));
  }
  i626.ShaderCompilationErrors = i628
  i626.name = i627[1]
  i626.guid = i627[2]
  var i631 = i627[3]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( i631[i + 0] );
  }
  i626.shaderDefinedKeywords = i630
  var i633 = i627[4]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i633[i + 0]) );
  }
  i626.passes = i632
  var i635 = i627[5]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i635[i + 0]) );
  }
  i626.usePasses = i634
  var i637 = i627[6]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i637[i + 0]) );
  }
  i626.defaultParameterValues = i636
  request.r(i627[7], i627[8], 0, i626, 'unityFallbackShader')
  i626.readDepth = !!i627[9]
  i626.isCreatedByShaderGraph = !!i627[10]
  i626.usedBatchUniforms = i627[11]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i641 = data
  i640.shaderName = i641[0]
  i640.errorMessage = i641[1]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i644 = root || new pc.UnityShaderPass()
  var i645 = data
  i644.id = i645[0]
  i644.subShaderIndex = i645[1]
  i644.name = i645[2]
  i644.passType = i645[3]
  i644.grabPassTextureName = i645[4]
  i644.usePass = !!i645[5]
  i644.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[6], i644.zTest)
  i644.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[7], i644.zWrite)
  i644.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[8], i644.culling)
  i644.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i645[9], i644.blending)
  i644.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i645[10], i644.alphaBlending)
  i644.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[11], i644.colorWriteMask)
  i644.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[12], i644.offsetUnits)
  i644.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[13], i644.offsetFactor)
  i644.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[14], i644.stencilRef)
  i644.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[15], i644.stencilReadMask)
  i644.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i645[16], i644.stencilWriteMask)
  i644.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i645[17], i644.stencilOp)
  i644.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i645[18], i644.stencilOpFront)
  i644.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i645[19], i644.stencilOpBack)
  var i647 = i645[20]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i647[i + 0]) );
  }
  i644.tags = i646
  var i649 = i645[21]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( i649[i + 0] );
  }
  i644.passDefinedKeywords = i648
  var i651 = i645[22]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i651[i + 0]) );
  }
  i644.passDefinedKeywordGroups = i650
  var i653 = i645[23]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i653[i + 0]) );
  }
  i644.variants = i652
  var i655 = i645[24]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i655[i + 0]) );
  }
  i644.excludedVariants = i654
  i644.hasDepthReader = !!i645[25]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i657 = data
  i656.val = i657[0]
  i656.name = i657[1]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i659 = data
  i658.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[0], i658.src)
  i658.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[1], i658.dst)
  i658.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[2], i658.op)
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i661 = data
  i660.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i661[0], i660.pass)
  i660.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i661[1], i660.fail)
  i660.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i661[2], i660.zFail)
  i660.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i661[3], i660.comp)
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i665 = data
  i664.name = i665[0]
  i664.value = i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i669 = data
  var i671 = i669[0]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( i671[i + 0] );
  }
  i668.keywords = i670
  i668.hasDiscard = !!i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i675 = data
  i674.passId = i675[0]
  i674.subShaderIndex = i675[1]
  var i677 = i675[2]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( i677[i + 0] );
  }
  i674.keywords = i676
  i674.vertexProgram = i675[3]
  i674.fragmentProgram = i675[4]
  i674.compiledForWebGL2 = !!i675[5]
  i674.readDepth = !!i675[6]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'shader')
  i680.pass = i681[2]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i685 = data
  i684.name = i685[0]
  i684.type = i685[1]
  i684.value = new pc.Vec4( i685[2], i685[3], i685[4], i685[5] )
  i684.textureValue = i685[6]
  i684.shaderPropertyFlag = i685[7]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i687 = data
  i686.name = i687[0]
  request.r(i687[1], i687[2], 0, i686, 'texture')
  i686.aabb = i687[3]
  i686.vertices = i687[4]
  i686.triangles = i687[5]
  i686.textureRect = UnityEngine.Rect.MinMaxRect(i687[6], i687[7], i687[8], i687[9])
  i686.packedRect = UnityEngine.Rect.MinMaxRect(i687[10], i687[11], i687[12], i687[13])
  i686.border = new pc.Vec4( i687[14], i687[15], i687[16], i687[17] )
  i686.transparency = i687[18]
  i686.bounds = i687[19]
  i686.pixelsPerUnit = i687[20]
  i686.textureWidth = i687[21]
  i686.textureHeight = i687[22]
  i686.nativeSize = new pc.Vec2( i687[23], i687[24] )
  i686.pivot = new pc.Vec2( i687[25], i687[26] )
  i686.textureRectOffset = new pc.Vec2( i687[27], i687[28] )
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i689 = data
  i688.name = i689[0]
  i688.ascent = i689[1]
  i688.originalLineHeight = i689[2]
  i688.fontSize = i689[3]
  var i691 = i689[4]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i691[i + 0]) );
  }
  i688.characterInfo = i690
  request.r(i689[5], i689[6], 0, i688, 'texture')
  i688.originalFontSize = i689[7]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i695 = data
  i694.index = i695[0]
  i694.advance = i695[1]
  i694.bearing = i695[2]
  i694.glyphWidth = i695[3]
  i694.glyphHeight = i695[4]
  i694.minX = i695[5]
  i694.maxX = i695[6]
  i694.minY = i695[7]
  i694.maxY = i695[8]
  i694.uvBottomLeftX = i695[9]
  i694.uvBottomLeftY = i695[10]
  i694.uvBottomRightX = i695[11]
  i694.uvBottomRightY = i695[12]
  i694.uvTopLeftX = i695[13]
  i694.uvTopLeftY = i695[14]
  i694.uvTopRightX = i695[15]
  i694.uvTopRightY = i695[16]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i697 = data
  i696.name = i697[0]
  i696.bytes64 = i697[1]
  i696.data = i697[2]
  return i696
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i698 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i699 = data
  i698.hashCode = i699[0]
  request.r(i699[1], i699[2], 0, i698, 'material')
  i698.materialHashCode = i699[3]
  request.r(i699[4], i699[5], 0, i698, 'atlas')
  i698.normalStyle = i699[6]
  i698.normalSpacingOffset = i699[7]
  i698.boldStyle = i699[8]
  i698.boldSpacing = i699[9]
  i698.italicStyle = i699[10]
  i698.tabSize = i699[11]
  i698.m_Version = i699[12]
  i698.m_SourceFontFileGUID = i699[13]
  request.r(i699[14], i699[15], 0, i698, 'm_SourceFontFile_EditorRef')
  request.r(i699[16], i699[17], 0, i698, 'm_SourceFontFile')
  i698.m_AtlasPopulationMode = i699[18]
  i698.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i699[19], i698.m_FaceInfo)
  var i701 = i699[20]
  var i700 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i701.length; i += 1) {
    i700.add(request.d('UnityEngine.TextCore.Glyph', i701[i + 0]));
  }
  i698.m_GlyphTable = i700
  var i703 = i699[21]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i703.length; i += 1) {
    i702.add(request.d('TMPro.TMP_Character', i703[i + 0]));
  }
  i698.m_CharacterTable = i702
  var i705 = i699[22]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i698.m_AtlasTextures = i704
  i698.m_AtlasTextureIndex = i699[23]
  i698.m_IsMultiAtlasTexturesEnabled = !!i699[24]
  i698.m_ClearDynamicDataOnBuild = !!i699[25]
  var i707 = i699[26]
  var i706 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i707.length; i += 1) {
    i706.add(request.d('UnityEngine.TextCore.GlyphRect', i707[i + 0]));
  }
  i698.m_UsedGlyphRects = i706
  var i709 = i699[27]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i709.length; i += 1) {
    i708.add(request.d('UnityEngine.TextCore.GlyphRect', i709[i + 0]));
  }
  i698.m_FreeGlyphRects = i708
  i698.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i699[28], i698.m_fontInfo)
  i698.m_AtlasWidth = i699[29]
  i698.m_AtlasHeight = i699[30]
  i698.m_AtlasPadding = i699[31]
  i698.m_AtlasRenderMode = i699[32]
  var i711 = i699[33]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i711.length; i += 1) {
    i710.add(request.d('TMPro.TMP_Glyph', i711[i + 0]));
  }
  i698.m_glyphInfoList = i710
  i698.m_KerningTable = request.d('TMPro.KerningTable', i699[34], i698.m_KerningTable)
  i698.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i699[35], i698.m_FontFeatureTable)
  var i713 = i699[36]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 1, i712, '')
  }
  i698.fallbackFontAssets = i712
  var i715 = i699[37]
  var i714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 1, i714, '')
  }
  i698.m_FallbackFontAssetTable = i714
  i698.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i699[38], i698.m_CreationSettings)
  var i717 = i699[39]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('TMPro.TMP_FontWeightPair', i717[i + 0]) );
  }
  i698.m_FontWeightTable = i716
  var i719 = i699[40]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('TMPro.TMP_FontWeightPair', i719[i + 0]) );
  }
  i698.fontWeights = i718
  return i698
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i721 = data
  i720.m_FaceIndex = i721[0]
  i720.m_FamilyName = i721[1]
  i720.m_StyleName = i721[2]
  i720.m_PointSize = i721[3]
  i720.m_Scale = i721[4]
  i720.m_UnitsPerEM = i721[5]
  i720.m_LineHeight = i721[6]
  i720.m_AscentLine = i721[7]
  i720.m_CapLine = i721[8]
  i720.m_MeanLine = i721[9]
  i720.m_Baseline = i721[10]
  i720.m_DescentLine = i721[11]
  i720.m_SuperscriptOffset = i721[12]
  i720.m_SuperscriptSize = i721[13]
  i720.m_SubscriptOffset = i721[14]
  i720.m_SubscriptSize = i721[15]
  i720.m_UnderlineOffset = i721[16]
  i720.m_UnderlineThickness = i721[17]
  i720.m_StrikethroughOffset = i721[18]
  i720.m_StrikethroughThickness = i721[19]
  i720.m_TabWidth = i721[20]
  return i720
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i725 = data
  i724.m_Index = i725[0]
  i724.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i725[1], i724.m_Metrics)
  i724.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i725[2], i724.m_GlyphRect)
  i724.m_Scale = i725[3]
  i724.m_AtlasIndex = i725[4]
  i724.m_ClassDefinitionType = i725[5]
  return i724
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i727 = data
  i726.m_Width = i727[0]
  i726.m_Height = i727[1]
  i726.m_HorizontalBearingX = i727[2]
  i726.m_HorizontalBearingY = i727[3]
  i726.m_HorizontalAdvance = i727[4]
  return i726
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i729 = data
  i728.m_X = i729[0]
  i728.m_Y = i729[1]
  i728.m_Width = i729[2]
  i728.m_Height = i729[3]
  return i728
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i732 = root || request.c( 'TMPro.TMP_Character' )
  var i733 = data
  i732.m_ElementType = i733[0]
  i732.m_Unicode = i733[1]
  i732.m_GlyphIndex = i733[2]
  i732.m_Scale = i733[3]
  return i732
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i738 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i739 = data
  i738.Name = i739[0]
  i738.PointSize = i739[1]
  i738.Scale = i739[2]
  i738.CharacterCount = i739[3]
  i738.LineHeight = i739[4]
  i738.Baseline = i739[5]
  i738.Ascender = i739[6]
  i738.CapHeight = i739[7]
  i738.Descender = i739[8]
  i738.CenterLine = i739[9]
  i738.SuperscriptOffset = i739[10]
  i738.SubscriptOffset = i739[11]
  i738.SubSize = i739[12]
  i738.Underline = i739[13]
  i738.UnderlineThickness = i739[14]
  i738.strikethrough = i739[15]
  i738.strikethroughThickness = i739[16]
  i738.TabWidth = i739[17]
  i738.Padding = i739[18]
  i738.AtlasWidth = i739[19]
  i738.AtlasHeight = i739[20]
  return i738
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i742 = root || request.c( 'TMPro.TMP_Glyph' )
  var i743 = data
  i742.id = i743[0]
  i742.x = i743[1]
  i742.y = i743[2]
  i742.width = i743[3]
  i742.height = i743[4]
  i742.xOffset = i743[5]
  i742.yOffset = i743[6]
  i742.xAdvance = i743[7]
  i742.scale = i743[8]
  return i742
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i744 = root || request.c( 'TMPro.KerningTable' )
  var i745 = data
  var i747 = i745[0]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i747.length; i += 1) {
    i746.add(request.d('TMPro.KerningPair', i747[i + 0]));
  }
  i744.kerningPairs = i746
  return i744
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i750 = root || request.c( 'TMPro.KerningPair' )
  var i751 = data
  i750.xOffset = i751[0]
  i750.m_FirstGlyph = i751[1]
  i750.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i751[2], i750.m_FirstGlyphAdjustments)
  i750.m_SecondGlyph = i751[3]
  i750.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i751[4], i750.m_SecondGlyphAdjustments)
  i750.m_IgnoreSpacingAdjustments = !!i751[5]
  return i750
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i752 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i753 = data
  var i755 = i753[0]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i755[i + 0]));
  }
  i752.m_GlyphPairAdjustmentRecords = i754
  return i752
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i758 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i759 = data
  i758.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i759[0], i758.m_FirstAdjustmentRecord)
  i758.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i759[1], i758.m_SecondAdjustmentRecord)
  i758.m_FeatureLookupFlags = i759[2]
  return i758
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i760 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i761 = data
  i760.m_GlyphIndex = i761[0]
  i760.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i761[1], i760.m_GlyphValueRecord)
  return i760
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i762 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i763 = data
  i762.m_XPlacement = i763[0]
  i762.m_YPlacement = i763[1]
  i762.m_XAdvance = i763[2]
  i762.m_YAdvance = i763[3]
  return i762
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i766 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i767 = data
  i766.sourceFontFileName = i767[0]
  i766.sourceFontFileGUID = i767[1]
  i766.pointSizeSamplingMode = i767[2]
  i766.pointSize = i767[3]
  i766.padding = i767[4]
  i766.packingMode = i767[5]
  i766.atlasWidth = i767[6]
  i766.atlasHeight = i767[7]
  i766.characterSetSelectionMode = i767[8]
  i766.characterSequence = i767[9]
  i766.referencedFontAssetGUID = i767[10]
  i766.referencedTextAssetGUID = i767[11]
  i766.fontStyle = i767[12]
  i766.fontStyleModifier = i767[13]
  i766.renderMode = i767[14]
  i766.includeFontFeatures = !!i767[15]
  return i766
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i770 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'regularTypeface')
  request.r(i771[2], i771[3], 0, i770, 'italicTypeface')
  return i770
}

Deserializers["EnemyInfos"] = function (request, data, root) {
  var i772 = root || request.c( 'EnemyInfos' )
  var i773 = data
  i772.enemySpeed = i773[0]
  i772.enemyMaxHealth = i773[1]
  request.r(i773[2], i773[3], 0, i772, 'healthBar')
  var i775 = i773[4]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('EnemyInfosSet', i775[i + 0]) );
  }
  i772.enemyInfosSet = i774
  return i772
}

Deserializers["EnemyInfosSet"] = function (request, data, root) {
  var i778 = root || request.c( 'EnemyInfosSet' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'body')
  request.r(i779[2], i779[3], 0, i778, 'leftLeg')
  request.r(i779[4], i779[5], 0, i778, 'rightLeg')
  request.r(i779[6], i779[7], 0, i778, 'countryFlag')
  i778.enemyName = i779[8]
  return i778
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i780 = root || request.c( 'TMPro.TMP_Settings' )
  var i781 = data
  i780.m_enableWordWrapping = !!i781[0]
  i780.m_enableKerning = !!i781[1]
  i780.m_enableExtraPadding = !!i781[2]
  i780.m_enableTintAllSprites = !!i781[3]
  i780.m_enableParseEscapeCharacters = !!i781[4]
  i780.m_EnableRaycastTarget = !!i781[5]
  i780.m_GetFontFeaturesAtRuntime = !!i781[6]
  i780.m_missingGlyphCharacter = i781[7]
  i780.m_warningsDisabled = !!i781[8]
  request.r(i781[9], i781[10], 0, i780, 'm_defaultFontAsset')
  i780.m_defaultFontAssetPath = i781[11]
  i780.m_defaultFontSize = i781[12]
  i780.m_defaultAutoSizeMinRatio = i781[13]
  i780.m_defaultAutoSizeMaxRatio = i781[14]
  i780.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i781[15], i781[16] )
  i780.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i781[17], i781[18] )
  i780.m_autoSizeTextContainer = !!i781[19]
  i780.m_IsTextObjectScaleStatic = !!i781[20]
  var i783 = i781[21]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 1, i782, '')
  }
  i780.m_fallbackFontAssets = i782
  i780.m_matchMaterialPreset = !!i781[22]
  request.r(i781[23], i781[24], 0, i780, 'm_defaultSpriteAsset')
  i780.m_defaultSpriteAssetPath = i781[25]
  i780.m_enableEmojiSupport = !!i781[26]
  i780.m_MissingCharacterSpriteUnicode = i781[27]
  i780.m_defaultColorGradientPresetsPath = i781[28]
  request.r(i781[29], i781[30], 0, i780, 'm_defaultStyleSheet')
  i780.m_StyleSheetsResourcePath = i781[31]
  request.r(i781[32], i781[33], 0, i780, 'm_leadingCharacters')
  request.r(i781[34], i781[35], 0, i780, 'm_followingCharacters')
  i780.m_UseModernHangulLineBreakingRules = !!i781[36]
  return i780
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i784 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i785 = data
  i784.hashCode = i785[0]
  request.r(i785[1], i785[2], 0, i784, 'material')
  i784.materialHashCode = i785[3]
  request.r(i785[4], i785[5], 0, i784, 'spriteSheet')
  var i787 = i785[6]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('TMPro.TMP_Sprite', i787[i + 0]));
  }
  i784.spriteInfoList = i786
  var i789 = i785[7]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 1, i788, '')
  }
  i784.fallbackSpriteAssets = i788
  i784.m_Version = i785[8]
  i784.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i785[9], i784.m_FaceInfo)
  var i791 = i785[10]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('TMPro.TMP_SpriteCharacter', i791[i + 0]));
  }
  i784.m_SpriteCharacterTable = i790
  var i793 = i785[11]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i793.length; i += 1) {
    i792.add(request.d('TMPro.TMP_SpriteGlyph', i793[i + 0]));
  }
  i784.m_SpriteGlyphTable = i792
  return i784
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i796 = root || request.c( 'TMPro.TMP_Sprite' )
  var i797 = data
  i796.name = i797[0]
  i796.hashCode = i797[1]
  i796.unicode = i797[2]
  i796.pivot = new pc.Vec2( i797[3], i797[4] )
  request.r(i797[5], i797[6], 0, i796, 'sprite')
  i796.id = i797[7]
  i796.x = i797[8]
  i796.y = i797[9]
  i796.width = i797[10]
  i796.height = i797[11]
  i796.xOffset = i797[12]
  i796.yOffset = i797[13]
  i796.xAdvance = i797[14]
  i796.scale = i797[15]
  return i796
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i802 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i803 = data
  i802.m_Name = i803[0]
  i802.m_HashCode = i803[1]
  i802.m_ElementType = i803[2]
  i802.m_Unicode = i803[3]
  i802.m_GlyphIndex = i803[4]
  i802.m_Scale = i803[5]
  return i802
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i806 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'sprite')
  i806.m_Index = i807[2]
  i806.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i807[3], i806.m_Metrics)
  i806.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i807[4], i806.m_GlyphRect)
  i806.m_Scale = i807[5]
  i806.m_AtlasIndex = i807[6]
  i806.m_ClassDefinitionType = i807[7]
  return i806
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i808 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i809 = data
  var i811 = i809[0]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i811.length; i += 1) {
    i810.add(request.d('TMPro.TMP_Style', i811[i + 0]));
  }
  i808.m_StyleList = i810
  return i808
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i814 = root || request.c( 'TMPro.TMP_Style' )
  var i815 = data
  i814.m_Name = i815[0]
  i814.m_HashCode = i815[1]
  i814.m_OpeningDefinition = i815[2]
  i814.m_ClosingDefinition = i815[3]
  i814.m_OpeningTagArray = i815[4]
  i814.m_ClosingTagArray = i815[5]
  i814.m_OpeningTagUnicodeArray = i815[6]
  i814.m_ClosingTagUnicodeArray = i815[7]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i817 = data
  var i819 = i817[0]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i819[i + 0]) );
  }
  i816.files = i818
  i816.componentToPrefabIds = i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i823 = data
  i822.path = i823[0]
  request.r(i823[1], i823[2], 0, i822, 'unityObject')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i825 = data
  var i827 = i825[0]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i827[i + 0]) );
  }
  i824.scriptsExecutionOrder = i826
  var i829 = i825[1]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i829[i + 0]) );
  }
  i824.sortingLayers = i828
  var i831 = i825[2]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i831[i + 0]) );
  }
  i824.cullingLayers = i830
  i824.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i825[3], i824.timeSettings)
  i824.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i825[4], i824.physicsSettings)
  i824.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i825[5], i824.physics2DSettings)
  i824.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i825[6], i824.qualitySettings)
  i824.enableRealtimeShadows = !!i825[7]
  i824.enableAutoInstancing = !!i825[8]
  i824.enableDynamicBatching = !!i825[9]
  i824.lightmapEncodingQuality = i825[10]
  i824.desiredColorSpace = i825[11]
  var i833 = i825[12]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( i833[i + 0] );
  }
  i824.allTags = i832
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i837 = data
  i836.name = i837[0]
  i836.value = i837[1]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i841 = data
  i840.id = i841[0]
  i840.name = i841[1]
  i840.value = i841[2]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i845 = data
  i844.id = i845[0]
  i844.name = i845[1]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i847 = data
  i846.fixedDeltaTime = i847[0]
  i846.maximumDeltaTime = i847[1]
  i846.timeScale = i847[2]
  i846.maximumParticleTimestep = i847[3]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i849 = data
  i848.gravity = new pc.Vec3( i849[0], i849[1], i849[2] )
  i848.defaultSolverIterations = i849[3]
  i848.bounceThreshold = i849[4]
  i848.autoSyncTransforms = !!i849[5]
  i848.autoSimulation = !!i849[6]
  var i851 = i849[7]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i851[i + 0]) );
  }
  i848.collisionMatrix = i850
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i855 = data
  i854.enabled = !!i855[0]
  i854.layerId = i855[1]
  i854.otherLayerId = i855[2]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'material')
  i856.gravity = new pc.Vec2( i857[2], i857[3] )
  i856.positionIterations = i857[4]
  i856.velocityIterations = i857[5]
  i856.velocityThreshold = i857[6]
  i856.maxLinearCorrection = i857[7]
  i856.maxAngularCorrection = i857[8]
  i856.maxTranslationSpeed = i857[9]
  i856.maxRotationSpeed = i857[10]
  i856.baumgarteScale = i857[11]
  i856.baumgarteTOIScale = i857[12]
  i856.timeToSleep = i857[13]
  i856.linearSleepTolerance = i857[14]
  i856.angularSleepTolerance = i857[15]
  i856.defaultContactOffset = i857[16]
  i856.autoSimulation = !!i857[17]
  i856.queriesHitTriggers = !!i857[18]
  i856.queriesStartInColliders = !!i857[19]
  i856.callbacksOnDisable = !!i857[20]
  i856.reuseCollisionCallbacks = !!i857[21]
  i856.autoSyncTransforms = !!i857[22]
  var i859 = i857[23]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i859[i + 0]) );
  }
  i856.collisionMatrix = i858
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i863 = data
  i862.enabled = !!i863[0]
  i862.layerId = i863[1]
  i862.otherLayerId = i863[2]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i865 = data
  var i867 = i865[0]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i867[i + 0]) );
  }
  i864.qualityLevels = i866
  var i869 = i865[1]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( i869[i + 0] );
  }
  i864.names = i868
  i864.shadows = i865[2]
  i864.anisotropicFiltering = i865[3]
  i864.antiAliasing = i865[4]
  i864.lodBias = i865[5]
  i864.shadowCascades = i865[6]
  i864.shadowDistance = i865[7]
  i864.shadowmaskMode = i865[8]
  i864.shadowProjection = i865[9]
  i864.shadowResolution = i865[10]
  i864.softParticles = !!i865[11]
  i864.softVegetation = !!i865[12]
  i864.activeColorSpace = i865[13]
  i864.desiredColorSpace = i865[14]
  i864.masterTextureLimit = i865[15]
  i864.maxQueuedFrames = i865[16]
  i864.particleRaycastBudget = i865[17]
  i864.pixelLightCount = i865[18]
  i864.realtimeReflectionProbes = !!i865[19]
  i864.shadowCascade2Split = i865[20]
  i864.shadowCascade4Split = new pc.Vec3( i865[21], i865[22], i865[23] )
  i864.streamingMipmapsActive = !!i865[24]
  i864.vSyncCount = i865[25]
  i864.asyncUploadBufferSize = i865[26]
  i864.asyncUploadTimeSlice = i865[27]
  i864.billboardsFaceCameraPosition = !!i865[28]
  i864.shadowNearPlaneOffset = i865[29]
  i864.streamingMipmapsMemoryBudget = i865[30]
  i864.maximumLODLevel = i865[31]
  i864.streamingMipmapsAddAllCameras = !!i865[32]
  i864.streamingMipmapsMaxLevelReduction = i865[33]
  i864.streamingMipmapsRenderersPerFrame = i865[34]
  i864.resolutionScalingFixedDPIFactor = i865[35]
  i864.streamingMipmapsMaxFileIORequests = i865[36]
  i864.currentQualityLevel = i865[37]
  return i864
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'm_ObjectArgument')
  i872.m_ObjectArgumentAssemblyTypeName = i873[2]
  i872.m_IntArgument = i873[3]
  i872.m_FloatArgument = i873[4]
  i872.m_StringArgument = i873[5]
  i872.m_BoolArgument = !!i873[6]
  return i872
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i875 = data
  i874.xPlacement = i875[0]
  i874.yPlacement = i875[1]
  i874.xAdvance = i875[2]
  i874.yAdvance = i875[3]
  return i874
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[36],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[11],"67":[11],"68":[11],"69":[11],"70":[11],"71":[11],"72":[11],"73":[11],"74":[11],"75":[11],"76":[11],"77":[11],"78":[11],"79":[36],"80":[81],"82":[83],"84":[83],"19":[18],"85":[86],"87":[4],"88":[86],"89":[18],"90":[18],"22":[19],"16":[23,18],"91":[18],"21":[19],"92":[18],"93":[18],"94":[18],"95":[18],"96":[18],"97":[18],"98":[18],"25":[18],"99":[18],"100":[23,18],"101":[18],"102":[18],"103":[18],"104":[18],"105":[23,18],"106":[18],"107":[108],"109":[108],"110":[108],"111":[108],"112":[36],"113":[36],"114":[115],"116":[36],"117":[18],"118":[81,18],"15":[18,23],"119":[18],"120":[23,18],"121":[81],"122":[23,18],"123":[18],"124":[86],"125":[36],"126":[127]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","ItemCollisionController","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Shader","UnityEngine.EdgeCollider2D","Assets.Scripts.Controllers.SwordRotateController","Assets.Scripts.Controllers.SwordCollisionController","UnityEngine.Rigidbody2D","Assets.Scripts.Controllers.EnemyController","EnemyInfos","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","Assets.Scripts.Controllers.EnemyHealthController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","UnityEngine.Texture2D","Assets.Scripts.Signals.PoolSignals","Assets.Scripts.Signals.PlayerSignals","Assets.Scripts.Signals.EnemySignals","PoolManager","PoolController","Assets.Scripts.Managers.PlayerManager","Assets.Scripts.Controllers.PlayerHealthController","Assets.Scripts.Managers.EnemyManager","GameController","UnityEngine.Camera","UnityEngine.AudioListener","Cinemachine.CinemachineBrain","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineFramingTransposer","PlayerMovementController","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.51f1";

Deserializers.productName = "AppleGrapple";

Deserializers.lunaInitializationTime = "10/25/2024 14:52:10";

Deserializers.lunaDaysRunning = "2.2";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "AppleGrapple";

Deserializers.lunaAppID = "25285";

Deserializers.projectId = "78a7024eb5762b2498a403cdfa677ba7";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.10.2\ncom.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

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

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "iOS";

Deserializers.applicationIdentifier = "com.DefaultCompany.AppleGrapple";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "cf32c8c7-d6ac-4c7b-bef8-ded199dc90da";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

