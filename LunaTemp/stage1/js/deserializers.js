var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.JointSpring' )
  var i1315 = data
  i1314.spring = i1315[0]
  i1314.damper = i1315[1]
  i1314.targetPosition = i1315[2]
  return i1314
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1316 = root || request.c( 'UnityEngine.JointMotor' )
  var i1317 = data
  i1316.m_TargetVelocity = i1317[0]
  i1316.m_Force = i1317[1]
  i1316.m_FreeSpin = i1317[2]
  return i1316
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1318 = root || request.c( 'UnityEngine.JointLimits' )
  var i1319 = data
  i1318.m_Min = i1319[0]
  i1318.m_Max = i1319[1]
  i1318.m_Bounciness = i1319[2]
  i1318.m_BounceMinVelocity = i1319[3]
  i1318.m_ContactDistance = i1319[4]
  i1318.minBounce = i1319[5]
  i1318.maxBounce = i1319[6]
  return i1318
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1320 = root || request.c( 'UnityEngine.JointDrive' )
  var i1321 = data
  i1320.m_PositionSpring = i1321[0]
  i1320.m_PositionDamper = i1321[1]
  i1320.m_MaximumForce = i1321[2]
  i1320.m_UseAcceleration = i1321[3]
  return i1320
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1323 = data
  i1322.m_Spring = i1323[0]
  i1322.m_Damper = i1323[1]
  return i1322
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1324 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1325 = data
  i1324.m_Limit = i1325[0]
  i1324.m_Bounciness = i1325[1]
  i1324.m_ContactDistance = i1325[2]
  return i1324
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1326 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1327 = data
  i1326.m_ExtremumSlip = i1327[0]
  i1326.m_ExtremumValue = i1327[1]
  i1326.m_AsymptoteSlip = i1327[2]
  i1326.m_AsymptoteValue = i1327[3]
  i1326.m_Stiffness = i1327[4]
  return i1326
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1328 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1329 = data
  i1328.m_LowerAngle = i1329[0]
  i1328.m_UpperAngle = i1329[1]
  return i1328
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1330 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1331 = data
  i1330.m_MotorSpeed = i1331[0]
  i1330.m_MaximumMotorTorque = i1331[1]
  return i1330
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1333 = data
  i1332.m_DampingRatio = i1333[0]
  i1332.m_Frequency = i1333[1]
  i1332.m_Angle = i1333[2]
  return i1332
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1335 = data
  i1334.m_LowerTranslation = i1335[0]
  i1334.m_UpperTranslation = i1335[1]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1337 = data
  i1336.position = new pc.Vec3( i1337[0], i1337[1], i1337[2] )
  i1336.scale = new pc.Vec3( i1337[3], i1337[4], i1337[5] )
  i1336.rotation = new pc.Quat(i1337[6], i1337[7], i1337[8], i1337[9])
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1339 = data
  i1338.radius = i1339[0]
  i1338.enabled = !!i1339[1]
  i1338.isTrigger = !!i1339[2]
  i1338.usedByEffector = !!i1339[3]
  i1338.density = i1339[4]
  i1338.offset = new pc.Vec2( i1339[5], i1339[6] )
  request.r(i1339[7], i1339[8], 0, i1338, 'material')
  return i1338
}

Deserializers["ItemCollisionController"] = function (request, data, root) {
  var i1340 = root || request.c( 'ItemCollisionController' )
  var i1341 = data
  i1340.radius = i1341[0]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1343 = data
  i1342.enabled = !!i1343[0]
  request.r(i1343[1], i1343[2], 0, i1342, 'sharedMaterial')
  var i1345 = i1343[3]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 2) {
  request.r(i1345[i + 0], i1345[i + 1], 2, i1344, '')
  }
  i1342.sharedMaterials = i1344
  i1342.receiveShadows = !!i1343[4]
  i1342.shadowCastingMode = i1343[5]
  i1342.sortingLayerID = i1343[6]
  i1342.sortingOrder = i1343[7]
  i1342.lightmapIndex = i1343[8]
  i1342.lightmapSceneIndex = i1343[9]
  i1342.lightmapScaleOffset = new pc.Vec4( i1343[10], i1343[11], i1343[12], i1343[13] )
  i1342.lightProbeUsage = i1343[14]
  i1342.reflectionProbeUsage = i1343[15]
  i1342.color = new pc.Color(i1343[16], i1343[17], i1343[18], i1343[19])
  request.r(i1343[20], i1343[21], 0, i1342, 'sprite')
  i1342.flipX = !!i1343[22]
  i1342.flipY = !!i1343[23]
  i1342.drawMode = i1343[24]
  i1342.size = new pc.Vec2( i1343[25], i1343[26] )
  i1342.tileMode = i1343[27]
  i1342.adaptiveModeThreshold = i1343[28]
  i1342.maskInteraction = i1343[29]
  i1342.spriteSortPoint = i1343[30]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1349 = data
  i1348.name = i1349[0]
  i1348.tagId = i1349[1]
  i1348.enabled = !!i1349[2]
  i1348.isStatic = !!i1349[3]
  i1348.layer = i1349[4]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1350 = root || new pc.UnityMaterial()
  var i1351 = data
  i1350.name = i1351[0]
  request.r(i1351[1], i1351[2], 0, i1350, 'shader')
  i1350.renderQueue = i1351[3]
  i1350.enableInstancing = !!i1351[4]
  var i1353 = i1351[5]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1353[i + 0]) );
  }
  i1350.floatParameters = i1352
  var i1355 = i1351[6]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1355[i + 0]) );
  }
  i1350.colorParameters = i1354
  var i1357 = i1351[7]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1357[i + 0]) );
  }
  i1350.vectorParameters = i1356
  var i1359 = i1351[8]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1359[i + 0]) );
  }
  i1350.textureParameters = i1358
  var i1361 = i1351[9]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1361[i + 0]) );
  }
  i1350.materialFlags = i1360
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1365 = data
  i1364.name = i1365[0]
  i1364.value = i1365[1]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1369 = data
  i1368.name = i1369[0]
  i1368.value = new pc.Color(i1369[1], i1369[2], i1369[3], i1369[4])
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1373 = data
  i1372.name = i1373[0]
  i1372.value = new pc.Vec4( i1373[1], i1373[2], i1373[3], i1373[4] )
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1377 = data
  i1376.name = i1377[0]
  request.r(i1377[1], i1377[2], 0, i1376, 'value')
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1381 = data
  i1380.name = i1381[0]
  i1380.enabled = !!i1381[1]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1383 = data
  i1382.name = i1383[0]
  i1382.width = i1383[1]
  i1382.height = i1383[2]
  i1382.mipmapCount = i1383[3]
  i1382.anisoLevel = i1383[4]
  i1382.filterMode = i1383[5]
  i1382.hdr = !!i1383[6]
  i1382.format = i1383[7]
  i1382.wrapMode = i1383[8]
  i1382.alphaIsTransparency = !!i1383[9]
  i1382.alphaSource = i1383[10]
  i1382.graphicsFormat = i1383[11]
  i1382.sRGBTexture = !!i1383[12]
  i1382.desiredColorSpace = i1383[13]
  i1382.wrapU = i1383[14]
  i1382.wrapV = i1383[15]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i1385 = data
  i1384.enabled = !!i1385[0]
  i1384.isTrigger = !!i1385[1]
  i1384.usedByEffector = !!i1385[2]
  i1384.density = i1385[3]
  i1384.offset = new pc.Vec2( i1385[4], i1385[5] )
  request.r(i1385[6], i1385[7], 0, i1384, 'material')
  i1384.edgeRadius = i1385[8]
  var i1387 = i1385[9]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 2) {
    i1386.push( new pc.Vec2( i1387[i + 0], i1387[i + 1] ) );
  }
  i1384.points = i1386
  i1384.useAdjacentStartPoint = !!i1385[10]
  i1384.adjacentStartPoint = new pc.Vec2( i1385[11], i1385[12] )
  i1384.useAdjacentEndPoint = !!i1385[13]
  i1384.adjacentEndPoint = new pc.Vec2( i1385[14], i1385[15] )
  return i1384
}

Deserializers["Assets.Scripts.Controllers.SwordRotateController"] = function (request, data, root) {
  var i1390 = root || request.c( 'Assets.Scripts.Controllers.SwordRotateController' )
  var i1391 = data
  i1390.rotationSpeed = i1391[0]
  return i1390
}

Deserializers["Assets.Scripts.Controllers.SwordCollisionController"] = function (request, data, root) {
  var i1392 = root || request.c( 'Assets.Scripts.Controllers.SwordCollisionController' )
  var i1393 = data
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1395 = data
  i1394.bodyType = i1395[0]
  request.r(i1395[1], i1395[2], 0, i1394, 'material')
  i1394.simulated = !!i1395[3]
  i1394.useAutoMass = !!i1395[4]
  i1394.mass = i1395[5]
  i1394.drag = i1395[6]
  i1394.angularDrag = i1395[7]
  i1394.gravityScale = i1395[8]
  i1394.collisionDetectionMode = i1395[9]
  i1394.sleepMode = i1395[10]
  i1394.constraints = i1395[11]
  return i1394
}

Deserializers["Assets.Scripts.Controllers.EnemyInfosController"] = function (request, data, root) {
  var i1396 = root || request.c( 'Assets.Scripts.Controllers.EnemyInfosController' )
  var i1397 = data
  request.r(i1397[0], i1397[1], 0, i1396, 'enemyInfos')
  request.r(i1397[2], i1397[3], 0, i1396, 'body')
  request.r(i1397[4], i1397[5], 0, i1396, 'leftLeg')
  request.r(i1397[6], i1397[7], 0, i1396, 'rightLeg')
  request.r(i1397[8], i1397[9], 0, i1396, 'enemyName')
  request.r(i1397[10], i1397[11], 0, i1396, 'countryFlag')
  return i1396
}

Deserializers["Assets.Scripts.Controllers.EnemyHealthController"] = function (request, data, root) {
  var i1398 = root || request.c( 'Assets.Scripts.Controllers.EnemyHealthController' )
  var i1399 = data
  i1398.maxHealth = i1399[0]
  request.r(i1399[1], i1399[2], 0, i1398, 'healthBar')
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1401 = data
  i1400.pivot = new pc.Vec2( i1401[0], i1401[1] )
  i1400.anchorMin = new pc.Vec2( i1401[2], i1401[3] )
  i1400.anchorMax = new pc.Vec2( i1401[4], i1401[5] )
  i1400.sizeDelta = new pc.Vec2( i1401[6], i1401[7] )
  i1400.anchoredPosition3D = new pc.Vec3( i1401[8], i1401[9], i1401[10] )
  i1400.rotation = new pc.Quat(i1401[11], i1401[12], i1401[13], i1401[14])
  i1400.scale = new pc.Vec3( i1401[15], i1401[16], i1401[17] )
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1403 = data
  i1402.enabled = !!i1403[0]
  i1402.planeDistance = i1403[1]
  i1402.referencePixelsPerUnit = i1403[2]
  i1402.isFallbackOverlay = !!i1403[3]
  i1402.renderMode = i1403[4]
  i1402.renderOrder = i1403[5]
  i1402.sortingLayerName = i1403[6]
  i1402.sortingOrder = i1403[7]
  i1402.scaleFactor = i1403[8]
  request.r(i1403[9], i1403[10], 0, i1402, 'worldCamera')
  i1402.overrideSorting = !!i1403[11]
  i1402.pixelPerfect = !!i1403[12]
  i1402.targetDisplay = i1403[13]
  i1402.overridePixelPerfect = !!i1403[14]
  return i1402
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1404 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1405 = data
  i1404.m_UiScaleMode = i1405[0]
  i1404.m_ReferencePixelsPerUnit = i1405[1]
  i1404.m_ScaleFactor = i1405[2]
  i1404.m_ReferenceResolution = new pc.Vec2( i1405[3], i1405[4] )
  i1404.m_ScreenMatchMode = i1405[5]
  i1404.m_MatchWidthOrHeight = i1405[6]
  i1404.m_PhysicalUnit = i1405[7]
  i1404.m_FallbackScreenDPI = i1405[8]
  i1404.m_DefaultSpriteDPI = i1405[9]
  i1404.m_DynamicPixelsPerUnit = i1405[10]
  i1404.m_PresetInfoIsWorld = !!i1405[11]
  return i1404
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1406 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1407 = data
  i1406.m_IgnoreReversedGraphics = !!i1407[0]
  i1406.m_BlockingObjects = i1407[1]
  i1406.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1407[2] )
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1409 = data
  i1408.cullTransparentMesh = !!i1409[0]
  return i1408
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1410 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1411 = data
  i1410.m_hasFontAssetChanged = !!i1411[0]
  request.r(i1411[1], i1411[2], 0, i1410, 'm_baseMaterial')
  i1410.m_maskOffset = new pc.Vec4( i1411[3], i1411[4], i1411[5], i1411[6] )
  i1410.m_text = i1411[7]
  i1410.m_isRightToLeft = !!i1411[8]
  request.r(i1411[9], i1411[10], 0, i1410, 'm_fontAsset')
  request.r(i1411[11], i1411[12], 0, i1410, 'm_sharedMaterial')
  var i1413 = i1411[13]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 2) {
  request.r(i1413[i + 0], i1413[i + 1], 2, i1412, '')
  }
  i1410.m_fontSharedMaterials = i1412
  request.r(i1411[14], i1411[15], 0, i1410, 'm_fontMaterial')
  var i1415 = i1411[16]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 2) {
  request.r(i1415[i + 0], i1415[i + 1], 2, i1414, '')
  }
  i1410.m_fontMaterials = i1414
  i1410.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1411[17], i1411[18], i1411[19], i1411[20])
  i1410.m_fontColor = new pc.Color(i1411[21], i1411[22], i1411[23], i1411[24])
  i1410.m_enableVertexGradient = !!i1411[25]
  i1410.m_colorMode = i1411[26]
  i1410.m_fontColorGradient = request.d('TMPro.VertexGradient', i1411[27], i1410.m_fontColorGradient)
  request.r(i1411[28], i1411[29], 0, i1410, 'm_fontColorGradientPreset')
  request.r(i1411[30], i1411[31], 0, i1410, 'm_spriteAsset')
  i1410.m_tintAllSprites = !!i1411[32]
  request.r(i1411[33], i1411[34], 0, i1410, 'm_StyleSheet')
  i1410.m_TextStyleHashCode = i1411[35]
  i1410.m_overrideHtmlColors = !!i1411[36]
  i1410.m_faceColor = UnityEngine.Color32.ConstructColor(i1411[37], i1411[38], i1411[39], i1411[40])
  i1410.m_fontSize = i1411[41]
  i1410.m_fontSizeBase = i1411[42]
  i1410.m_fontWeight = i1411[43]
  i1410.m_enableAutoSizing = !!i1411[44]
  i1410.m_fontSizeMin = i1411[45]
  i1410.m_fontSizeMax = i1411[46]
  i1410.m_fontStyle = i1411[47]
  i1410.m_HorizontalAlignment = i1411[48]
  i1410.m_VerticalAlignment = i1411[49]
  i1410.m_textAlignment = i1411[50]
  i1410.m_characterSpacing = i1411[51]
  i1410.m_wordSpacing = i1411[52]
  i1410.m_lineSpacing = i1411[53]
  i1410.m_lineSpacingMax = i1411[54]
  i1410.m_paragraphSpacing = i1411[55]
  i1410.m_charWidthMaxAdj = i1411[56]
  i1410.m_enableWordWrapping = !!i1411[57]
  i1410.m_wordWrappingRatios = i1411[58]
  i1410.m_overflowMode = i1411[59]
  request.r(i1411[60], i1411[61], 0, i1410, 'm_linkedTextComponent')
  request.r(i1411[62], i1411[63], 0, i1410, 'parentLinkedComponent')
  i1410.m_enableKerning = !!i1411[64]
  i1410.m_enableExtraPadding = !!i1411[65]
  i1410.checkPaddingRequired = !!i1411[66]
  i1410.m_isRichText = !!i1411[67]
  i1410.m_parseCtrlCharacters = !!i1411[68]
  i1410.m_isOrthographic = !!i1411[69]
  i1410.m_isCullingEnabled = !!i1411[70]
  i1410.m_horizontalMapping = i1411[71]
  i1410.m_verticalMapping = i1411[72]
  i1410.m_uvLineOffset = i1411[73]
  i1410.m_geometrySortingOrder = i1411[74]
  i1410.m_IsTextObjectScaleStatic = !!i1411[75]
  i1410.m_VertexBufferAutoSizeReduction = !!i1411[76]
  i1410.m_useMaxVisibleDescender = !!i1411[77]
  i1410.m_pageToDisplay = i1411[78]
  i1410.m_margin = new pc.Vec4( i1411[79], i1411[80], i1411[81], i1411[82] )
  i1410.m_isUsingLegacyAnimationComponent = !!i1411[83]
  i1410.m_isVolumetricText = !!i1411[84]
  request.r(i1411[85], i1411[86], 0, i1410, 'm_Material')
  i1410.m_Maskable = !!i1411[87]
  i1410.m_Color = new pc.Color(i1411[88], i1411[89], i1411[90], i1411[91])
  i1410.m_RaycastTarget = !!i1411[92]
  i1410.m_RaycastPadding = new pc.Vec4( i1411[93], i1411[94], i1411[95], i1411[96] )
  return i1410
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1416 = root || request.c( 'TMPro.VertexGradient' )
  var i1417 = data
  i1416.topLeft = new pc.Color(i1417[0], i1417[1], i1417[2], i1417[3])
  i1416.topRight = new pc.Color(i1417[4], i1417[5], i1417[6], i1417[7])
  i1416.bottomLeft = new pc.Color(i1417[8], i1417[9], i1417[10], i1417[11])
  i1416.bottomRight = new pc.Color(i1417[12], i1417[13], i1417[14], i1417[15])
  return i1416
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1419 = data
  i1418.m_ShowMaskGraphic = !!i1419[0]
  return i1418
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1420 = root || request.c( 'UnityEngine.UI.Image' )
  var i1421 = data
  request.r(i1421[0], i1421[1], 0, i1420, 'm_Sprite')
  i1420.m_Type = i1421[2]
  i1420.m_PreserveAspect = !!i1421[3]
  i1420.m_FillCenter = !!i1421[4]
  i1420.m_FillMethod = i1421[5]
  i1420.m_FillAmount = i1421[6]
  i1420.m_FillClockwise = !!i1421[7]
  i1420.m_FillOrigin = i1421[8]
  i1420.m_UseSpriteMesh = !!i1421[9]
  i1420.m_PixelsPerUnitMultiplier = i1421[10]
  request.r(i1421[11], i1421[12], 0, i1420, 'm_Material')
  i1420.m_Maskable = !!i1421[13]
  i1420.m_Color = new pc.Color(i1421[14], i1421[15], i1421[16], i1421[17])
  i1420.m_RaycastTarget = !!i1421[18]
  i1420.m_RaycastPadding = new pc.Vec4( i1421[19], i1421[20], i1421[21], i1421[22] )
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1423 = data
  i1422.name = i1423[0]
  i1422.index = i1423[1]
  i1422.startup = !!i1423[2]
  return i1422
}

Deserializers["Assets.Scripts.Signals.PoolSignals"] = function (request, data, root) {
  var i1424 = root || request.c( 'Assets.Scripts.Signals.PoolSignals' )
  var i1425 = data
  return i1424
}

Deserializers["Assets.Scripts.Signals.PlayerSignals"] = function (request, data, root) {
  var i1426 = root || request.c( 'Assets.Scripts.Signals.PlayerSignals' )
  var i1427 = data
  return i1426
}

Deserializers["Assets.Scripts.Signals.EnemySignals"] = function (request, data, root) {
  var i1428 = root || request.c( 'Assets.Scripts.Signals.EnemySignals' )
  var i1429 = data
  return i1428
}

Deserializers["PoolManager"] = function (request, data, root) {
  var i1430 = root || request.c( 'PoolManager' )
  var i1431 = data
  request.r(i1431[0], i1431[1], 0, i1430, 'poolController')
  return i1430
}

Deserializers["Assets.Scripts.Managers.PlayerManager"] = function (request, data, root) {
  var i1432 = root || request.c( 'Assets.Scripts.Managers.PlayerManager' )
  var i1433 = data
  request.r(i1433[0], i1433[1], 0, i1432, 'playerHealthController')
  return i1432
}

Deserializers["Assets.Scripts.Managers.EnemyManager"] = function (request, data, root) {
  var i1434 = root || request.c( 'Assets.Scripts.Managers.EnemyManager' )
  var i1435 = data
  return i1434
}

Deserializers["PoolController"] = function (request, data, root) {
  var i1436 = root || request.c( 'PoolController' )
  var i1437 = data
  var i1439 = i1437[0]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('PoolController+Pool', i1439[i + 0]) );
  }
  i1436.pools = i1438
  return i1436
}

Deserializers["PoolController+Pool"] = function (request, data, root) {
  var i1442 = root || request.c( 'PoolController+Pool' )
  var i1443 = data
  request.r(i1443[0], i1443[1], 0, i1442, 'objPrefab')
  i1442.poolSize = i1443[2]
  i1442.increaseAmount = i1443[3]
  return i1442
}

Deserializers["GameController"] = function (request, data, root) {
  var i1444 = root || request.c( 'GameController' )
  var i1445 = data
  i1444.xMin = i1445[0]
  i1444.xMax = i1445[1]
  i1444.yMin = i1445[2]
  i1444.yMax = i1445[3]
  i1444.itemCount = i1445[4]
  i1444.enemyCount = i1445[5]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1447 = data
  i1446.enabled = !!i1447[0]
  i1446.aspect = i1447[1]
  i1446.orthographic = !!i1447[2]
  i1446.orthographicSize = i1447[3]
  i1446.backgroundColor = new pc.Color(i1447[4], i1447[5], i1447[6], i1447[7])
  i1446.nearClipPlane = i1447[8]
  i1446.farClipPlane = i1447[9]
  i1446.fieldOfView = i1447[10]
  i1446.depth = i1447[11]
  i1446.clearFlags = i1447[12]
  i1446.cullingMask = i1447[13]
  i1446.rect = i1447[14]
  request.r(i1447[15], i1447[16], 0, i1446, 'targetTexture')
  i1446.usePhysicalProperties = !!i1447[17]
  i1446.focalLength = i1447[18]
  i1446.sensorSize = new pc.Vec2( i1447[19], i1447[20] )
  i1446.lensShift = new pc.Vec2( i1447[21], i1447[22] )
  i1446.gateFit = i1447[23]
  return i1446
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i1448 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i1449 = data
  i1448.m_ShowDebugText = !!i1449[0]
  i1448.m_ShowCameraFrustum = !!i1449[1]
  i1448.m_IgnoreTimeScale = !!i1449[2]
  request.r(i1449[3], i1449[4], 0, i1448, 'm_WorldUpOverride')
  i1448.m_UpdateMethod = i1449[5]
  i1448.m_BlendUpdateMethod = i1449[6]
  i1448.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i1449[7], i1448.m_DefaultBlend)
  request.r(i1449[8], i1449[9], 0, i1448, 'm_CustomBlends')
  i1448.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i1449[10], i1448.m_CameraCutEvent)
  i1448.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1449[11], i1448.m_CameraActivatedEvent)
  return i1448
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i1450 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i1451 = data
  i1450.m_Style = i1451[0]
  i1450.m_Time = i1451[1]
  i1450.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i1451[2] } )
  return i1450
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i1452 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i1453 = data
  i1452.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1453[0], i1452.m_PersistentCalls)
  return i1452
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1455 = data
  var i1457 = i1455[0]
  var i1456 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.add(request.d('UnityEngine.Events.PersistentCall', i1457[i + 0]));
  }
  i1454.m_Calls = i1456
  return i1454
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1460 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1461 = data
  request.r(i1461[0], i1461[1], 0, i1460, 'm_Target')
  i1460.m_TargetAssemblyTypeName = i1461[2]
  i1460.m_MethodName = i1461[3]
  i1460.m_Mode = i1461[4]
  i1460.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1461[5], i1460.m_Arguments)
  i1460.m_CallState = i1461[6]
  return i1460
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i1462 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i1463 = data
  i1462.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1463[0], i1462.m_PersistentCalls)
  return i1462
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i1464 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i1465 = data
  request.r(i1465[0], i1465[1], 0, i1464, 'm_LookAt')
  request.r(i1465[2], i1465[3], 0, i1464, 'm_Follow')
  i1464.m_Lens = request.d('Cinemachine.LensSettings', i1465[4], i1464.m_Lens)
  i1464.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i1465[5], i1464.m_Transitions)
  var i1467 = i1465[6]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( i1467[i + 0] );
  }
  i1464.m_ExcludedPropertiesInInspector = i1466
  var i1469 = i1465[7]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( i1469[i + 0] );
  }
  i1464.m_LockStageInInspector = i1468
  i1464.m_Priority = i1465[8]
  i1464.m_StandbyUpdate = i1465[9]
  i1464.m_LegacyBlendHint = i1465[10]
  request.r(i1465[11], i1465[12], 0, i1464, 'm_ComponentOwner')
  i1464.m_StreamingVersion = i1465[13]
  return i1464
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i1470 = root || request.c( 'Cinemachine.LensSettings' )
  var i1471 = data
  i1470.FieldOfView = i1471[0]
  i1470.OrthographicSize = i1471[1]
  i1470.NearClipPlane = i1471[2]
  i1470.FarClipPlane = i1471[3]
  i1470.Dutch = i1471[4]
  i1470.ModeOverride = i1471[5]
  i1470.LensShift = new pc.Vec2( i1471[6], i1471[7] )
  i1470.GateFit = i1471[8]
  i1470.FocusDistance = i1471[9]
  i1470.m_SensorSize = new pc.Vec2( i1471[10], i1471[11] )
  return i1470
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i1472 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i1473 = data
  i1472.m_BlendHint = i1473[0]
  i1472.m_InheritPosition = !!i1473[1]
  i1472.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1473[2], i1472.m_OnCameraLive)
  return i1472
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i1478 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i1479 = data
  return i1478
}

Deserializers["Cinemachine.CinemachineFramingTransposer"] = function (request, data, root) {
  var i1480 = root || request.c( 'Cinemachine.CinemachineFramingTransposer' )
  var i1481 = data
  i1480.m_TrackedObjectOffset = new pc.Vec3( i1481[0], i1481[1], i1481[2] )
  i1480.m_LookaheadTime = i1481[3]
  i1480.m_LookaheadSmoothing = i1481[4]
  i1480.m_LookaheadIgnoreY = !!i1481[5]
  i1480.m_XDamping = i1481[6]
  i1480.m_YDamping = i1481[7]
  i1480.m_ZDamping = i1481[8]
  i1480.m_TargetMovementOnly = !!i1481[9]
  i1480.m_ScreenX = i1481[10]
  i1480.m_ScreenY = i1481[11]
  i1480.m_CameraDistance = i1481[12]
  i1480.m_DeadZoneWidth = i1481[13]
  i1480.m_DeadZoneHeight = i1481[14]
  i1480.m_DeadZoneDepth = i1481[15]
  i1480.m_UnlimitedSoftZone = !!i1481[16]
  i1480.m_SoftZoneWidth = i1481[17]
  i1480.m_SoftZoneHeight = i1481[18]
  i1480.m_BiasX = i1481[19]
  i1480.m_BiasY = i1481[20]
  i1480.m_CenterOnActivate = !!i1481[21]
  i1480.m_GroupFramingMode = i1481[22]
  i1480.m_AdjustmentMode = i1481[23]
  i1480.m_GroupFramingSize = i1481[24]
  i1480.m_MaxDollyIn = i1481[25]
  i1480.m_MaxDollyOut = i1481[26]
  i1480.m_MinimumDistance = i1481[27]
  i1480.m_MaximumDistance = i1481[28]
  i1480.m_MinimumFOV = i1481[29]
  i1480.m_MaximumFOV = i1481[30]
  i1480.m_MinimumOrthoSize = i1481[31]
  i1480.m_MaximumOrthoSize = i1481[32]
  return i1480
}

Deserializers["PlayerMovementController"] = function (request, data, root) {
  var i1482 = root || request.c( 'PlayerMovementController' )
  var i1483 = data
  i1482.speed = i1483[0]
  return i1482
}

Deserializers["Assets.Scripts.Controllers.PlayerHealthController"] = function (request, data, root) {
  var i1484 = root || request.c( 'Assets.Scripts.Controllers.PlayerHealthController' )
  var i1485 = data
  i1484.maxHealth = i1485[0]
  request.r(i1485[1], i1485[2], 0, i1484, 'healthBar')
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1487 = data
  i1486.ambientIntensity = i1487[0]
  i1486.reflectionIntensity = i1487[1]
  i1486.ambientMode = i1487[2]
  i1486.ambientLight = new pc.Color(i1487[3], i1487[4], i1487[5], i1487[6])
  i1486.ambientSkyColor = new pc.Color(i1487[7], i1487[8], i1487[9], i1487[10])
  i1486.ambientGroundColor = new pc.Color(i1487[11], i1487[12], i1487[13], i1487[14])
  i1486.ambientEquatorColor = new pc.Color(i1487[15], i1487[16], i1487[17], i1487[18])
  i1486.fogColor = new pc.Color(i1487[19], i1487[20], i1487[21], i1487[22])
  i1486.fogEndDistance = i1487[23]
  i1486.fogStartDistance = i1487[24]
  i1486.fogDensity = i1487[25]
  i1486.fog = !!i1487[26]
  request.r(i1487[27], i1487[28], 0, i1486, 'skybox')
  i1486.fogMode = i1487[29]
  var i1489 = i1487[30]
  var i1488 = []
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1489[i + 0]) );
  }
  i1486.lightmaps = i1488
  i1486.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1487[31], i1486.lightProbes)
  i1486.lightmapsMode = i1487[32]
  i1486.mixedBakeMode = i1487[33]
  i1486.environmentLightingMode = i1487[34]
  i1486.ambientProbe = new pc.SphericalHarmonicsL2(i1487[35])
  i1486.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1487[36])
  i1486.useReferenceAmbientProbe = !!i1487[37]
  request.r(i1487[38], i1487[39], 0, i1486, 'customReflection')
  request.r(i1487[40], i1487[41], 0, i1486, 'defaultReflection')
  i1486.defaultReflectionMode = i1487[42]
  i1486.defaultReflectionResolution = i1487[43]
  i1486.sunLightObjectId = i1487[44]
  i1486.pixelLightCount = i1487[45]
  i1486.defaultReflectionHDR = !!i1487[46]
  i1486.hasLightDataAsset = !!i1487[47]
  i1486.hasManualGenerate = !!i1487[48]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1493 = data
  request.r(i1493[0], i1493[1], 0, i1492, 'lightmapColor')
  request.r(i1493[2], i1493[3], 0, i1492, 'lightmapDirection')
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1494 = root || new UnityEngine.LightProbes()
  var i1495 = data
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1503 = data
  var i1505 = i1503[0]
  var i1504 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1505[i + 0]));
  }
  i1502.ShaderCompilationErrors = i1504
  i1502.name = i1503[1]
  i1502.guid = i1503[2]
  var i1507 = i1503[3]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( i1507[i + 0] );
  }
  i1502.shaderDefinedKeywords = i1506
  var i1509 = i1503[4]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1509[i + 0]) );
  }
  i1502.passes = i1508
  var i1511 = i1503[5]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 1) {
    i1510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1511[i + 0]) );
  }
  i1502.usePasses = i1510
  var i1513 = i1503[6]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1513[i + 0]) );
  }
  i1502.defaultParameterValues = i1512
  request.r(i1503[7], i1503[8], 0, i1502, 'unityFallbackShader')
  i1502.readDepth = !!i1503[9]
  i1502.isCreatedByShaderGraph = !!i1503[10]
  i1502.usedBatchUniforms = i1503[11]
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1517 = data
  i1516.shaderName = i1517[0]
  i1516.errorMessage = i1517[1]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1520 = root || new pc.UnityShaderPass()
  var i1521 = data
  i1520.id = i1521[0]
  i1520.subShaderIndex = i1521[1]
  i1520.name = i1521[2]
  i1520.passType = i1521[3]
  i1520.grabPassTextureName = i1521[4]
  i1520.usePass = !!i1521[5]
  i1520.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1521[6], i1520.zTest)
  i1520.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1521[7], i1520.zWrite)
  i1520.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1521[8], i1520.culling)
  i1520.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1521[9], i1520.blending)
  i1520.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1521[10], i1520.alphaBlending)
  i1520.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1521[11], i1520.colorWriteMask)
  i1520.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1521[12], i1520.offsetUnits)
  i1520.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1521[13], i1520.offsetFactor)
  i1520.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1521[14], i1520.stencilRef)
  i1520.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1521[15], i1520.stencilReadMask)
  i1520.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1521[16], i1520.stencilWriteMask)
  i1520.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1521[17], i1520.stencilOp)
  i1520.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1521[18], i1520.stencilOpFront)
  i1520.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1521[19], i1520.stencilOpBack)
  var i1523 = i1521[20]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1523[i + 0]) );
  }
  i1520.tags = i1522
  var i1525 = i1521[21]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( i1525[i + 0] );
  }
  i1520.passDefinedKeywords = i1524
  var i1527 = i1521[22]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1527[i + 0]) );
  }
  i1520.passDefinedKeywordGroups = i1526
  var i1529 = i1521[23]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1529[i + 0]) );
  }
  i1520.variants = i1528
  var i1531 = i1521[24]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1531[i + 0]) );
  }
  i1520.excludedVariants = i1530
  i1520.hasDepthReader = !!i1521[25]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1533 = data
  i1532.val = i1533[0]
  i1532.name = i1533[1]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1535 = data
  i1534.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1535[0], i1534.src)
  i1534.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1535[1], i1534.dst)
  i1534.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1535[2], i1534.op)
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1537 = data
  i1536.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1537[0], i1536.pass)
  i1536.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1537[1], i1536.fail)
  i1536.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1537[2], i1536.zFail)
  i1536.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1537[3], i1536.comp)
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1541 = data
  i1540.name = i1541[0]
  i1540.value = i1541[1]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1545 = data
  var i1547 = i1545[0]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( i1547[i + 0] );
  }
  i1544.keywords = i1546
  i1544.hasDiscard = !!i1545[1]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1551 = data
  i1550.passId = i1551[0]
  i1550.subShaderIndex = i1551[1]
  var i1553 = i1551[2]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.push( i1553[i + 0] );
  }
  i1550.keywords = i1552
  i1550.vertexProgram = i1551[3]
  i1550.fragmentProgram = i1551[4]
  i1550.compiledForWebGL2 = !!i1551[5]
  i1550.readDepth = !!i1551[6]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1557 = data
  request.r(i1557[0], i1557[1], 0, i1556, 'shader')
  i1556.pass = i1557[2]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1561 = data
  i1560.name = i1561[0]
  i1560.type = i1561[1]
  i1560.value = new pc.Vec4( i1561[2], i1561[3], i1561[4], i1561[5] )
  i1560.textureValue = i1561[6]
  i1560.shaderPropertyFlag = i1561[7]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1563 = data
  i1562.name = i1563[0]
  request.r(i1563[1], i1563[2], 0, i1562, 'texture')
  i1562.aabb = i1563[3]
  i1562.vertices = i1563[4]
  i1562.triangles = i1563[5]
  i1562.textureRect = UnityEngine.Rect.MinMaxRect(i1563[6], i1563[7], i1563[8], i1563[9])
  i1562.packedRect = UnityEngine.Rect.MinMaxRect(i1563[10], i1563[11], i1563[12], i1563[13])
  i1562.border = new pc.Vec4( i1563[14], i1563[15], i1563[16], i1563[17] )
  i1562.transparency = i1563[18]
  i1562.bounds = i1563[19]
  i1562.pixelsPerUnit = i1563[20]
  i1562.textureWidth = i1563[21]
  i1562.textureHeight = i1563[22]
  i1562.nativeSize = new pc.Vec2( i1563[23], i1563[24] )
  i1562.pivot = new pc.Vec2( i1563[25], i1563[26] )
  i1562.textureRectOffset = new pc.Vec2( i1563[27], i1563[28] )
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1565 = data
  i1564.name = i1565[0]
  i1564.ascent = i1565[1]
  i1564.originalLineHeight = i1565[2]
  i1564.fontSize = i1565[3]
  var i1567 = i1565[4]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1567[i + 0]) );
  }
  i1564.characterInfo = i1566
  request.r(i1565[5], i1565[6], 0, i1564, 'texture')
  i1564.originalFontSize = i1565[7]
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1571 = data
  i1570.index = i1571[0]
  i1570.advance = i1571[1]
  i1570.bearing = i1571[2]
  i1570.glyphWidth = i1571[3]
  i1570.glyphHeight = i1571[4]
  i1570.minX = i1571[5]
  i1570.maxX = i1571[6]
  i1570.minY = i1571[7]
  i1570.maxY = i1571[8]
  i1570.uvBottomLeftX = i1571[9]
  i1570.uvBottomLeftY = i1571[10]
  i1570.uvBottomRightX = i1571[11]
  i1570.uvBottomRightY = i1571[12]
  i1570.uvTopLeftX = i1571[13]
  i1570.uvTopLeftY = i1571[14]
  i1570.uvTopRightX = i1571[15]
  i1570.uvTopRightY = i1571[16]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1573 = data
  i1572.name = i1573[0]
  i1572.bytes64 = i1573[1]
  i1572.data = i1573[2]
  return i1572
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1574 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1575 = data
  i1574.hashCode = i1575[0]
  request.r(i1575[1], i1575[2], 0, i1574, 'material')
  i1574.materialHashCode = i1575[3]
  request.r(i1575[4], i1575[5], 0, i1574, 'atlas')
  i1574.normalStyle = i1575[6]
  i1574.normalSpacingOffset = i1575[7]
  i1574.boldStyle = i1575[8]
  i1574.boldSpacing = i1575[9]
  i1574.italicStyle = i1575[10]
  i1574.tabSize = i1575[11]
  i1574.m_Version = i1575[12]
  i1574.m_SourceFontFileGUID = i1575[13]
  request.r(i1575[14], i1575[15], 0, i1574, 'm_SourceFontFile_EditorRef')
  request.r(i1575[16], i1575[17], 0, i1574, 'm_SourceFontFile')
  i1574.m_AtlasPopulationMode = i1575[18]
  i1574.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1575[19], i1574.m_FaceInfo)
  var i1577 = i1575[20]
  var i1576 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.add(request.d('UnityEngine.TextCore.Glyph', i1577[i + 0]));
  }
  i1574.m_GlyphTable = i1576
  var i1579 = i1575[21]
  var i1578 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.add(request.d('TMPro.TMP_Character', i1579[i + 0]));
  }
  i1574.m_CharacterTable = i1578
  var i1581 = i1575[22]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 2) {
  request.r(i1581[i + 0], i1581[i + 1], 2, i1580, '')
  }
  i1574.m_AtlasTextures = i1580
  i1574.m_AtlasTextureIndex = i1575[23]
  i1574.m_IsMultiAtlasTexturesEnabled = !!i1575[24]
  i1574.m_ClearDynamicDataOnBuild = !!i1575[25]
  var i1583 = i1575[26]
  var i1582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.add(request.d('UnityEngine.TextCore.GlyphRect', i1583[i + 0]));
  }
  i1574.m_UsedGlyphRects = i1582
  var i1585 = i1575[27]
  var i1584 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.add(request.d('UnityEngine.TextCore.GlyphRect', i1585[i + 0]));
  }
  i1574.m_FreeGlyphRects = i1584
  i1574.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1575[28], i1574.m_fontInfo)
  i1574.m_AtlasWidth = i1575[29]
  i1574.m_AtlasHeight = i1575[30]
  i1574.m_AtlasPadding = i1575[31]
  i1574.m_AtlasRenderMode = i1575[32]
  var i1587 = i1575[33]
  var i1586 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.add(request.d('TMPro.TMP_Glyph', i1587[i + 0]));
  }
  i1574.m_glyphInfoList = i1586
  i1574.m_KerningTable = request.d('TMPro.KerningTable', i1575[34], i1574.m_KerningTable)
  i1574.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1575[35], i1574.m_FontFeatureTable)
  var i1589 = i1575[36]
  var i1588 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1589.length; i += 2) {
  request.r(i1589[i + 0], i1589[i + 1], 1, i1588, '')
  }
  i1574.fallbackFontAssets = i1588
  var i1591 = i1575[37]
  var i1590 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1591.length; i += 2) {
  request.r(i1591[i + 0], i1591[i + 1], 1, i1590, '')
  }
  i1574.m_FallbackFontAssetTable = i1590
  i1574.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1575[38], i1574.m_CreationSettings)
  var i1593 = i1575[39]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( request.d('TMPro.TMP_FontWeightPair', i1593[i + 0]) );
  }
  i1574.m_FontWeightTable = i1592
  var i1595 = i1575[40]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.push( request.d('TMPro.TMP_FontWeightPair', i1595[i + 0]) );
  }
  i1574.fontWeights = i1594
  return i1574
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1597 = data
  i1596.m_FaceIndex = i1597[0]
  i1596.m_FamilyName = i1597[1]
  i1596.m_StyleName = i1597[2]
  i1596.m_PointSize = i1597[3]
  i1596.m_Scale = i1597[4]
  i1596.m_UnitsPerEM = i1597[5]
  i1596.m_LineHeight = i1597[6]
  i1596.m_AscentLine = i1597[7]
  i1596.m_CapLine = i1597[8]
  i1596.m_MeanLine = i1597[9]
  i1596.m_Baseline = i1597[10]
  i1596.m_DescentLine = i1597[11]
  i1596.m_SuperscriptOffset = i1597[12]
  i1596.m_SuperscriptSize = i1597[13]
  i1596.m_SubscriptOffset = i1597[14]
  i1596.m_SubscriptSize = i1597[15]
  i1596.m_UnderlineOffset = i1597[16]
  i1596.m_UnderlineThickness = i1597[17]
  i1596.m_StrikethroughOffset = i1597[18]
  i1596.m_StrikethroughThickness = i1597[19]
  i1596.m_TabWidth = i1597[20]
  return i1596
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1601 = data
  i1600.m_Index = i1601[0]
  i1600.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1601[1], i1600.m_Metrics)
  i1600.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1601[2], i1600.m_GlyphRect)
  i1600.m_Scale = i1601[3]
  i1600.m_AtlasIndex = i1601[4]
  i1600.m_ClassDefinitionType = i1601[5]
  return i1600
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1603 = data
  i1602.m_Width = i1603[0]
  i1602.m_Height = i1603[1]
  i1602.m_HorizontalBearingX = i1603[2]
  i1602.m_HorizontalBearingY = i1603[3]
  i1602.m_HorizontalAdvance = i1603[4]
  return i1602
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1605 = data
  i1604.m_X = i1605[0]
  i1604.m_Y = i1605[1]
  i1604.m_Width = i1605[2]
  i1604.m_Height = i1605[3]
  return i1604
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1608 = root || request.c( 'TMPro.TMP_Character' )
  var i1609 = data
  i1608.m_ElementType = i1609[0]
  i1608.m_Unicode = i1609[1]
  i1608.m_GlyphIndex = i1609[2]
  i1608.m_Scale = i1609[3]
  return i1608
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1614 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1615 = data
  i1614.Name = i1615[0]
  i1614.PointSize = i1615[1]
  i1614.Scale = i1615[2]
  i1614.CharacterCount = i1615[3]
  i1614.LineHeight = i1615[4]
  i1614.Baseline = i1615[5]
  i1614.Ascender = i1615[6]
  i1614.CapHeight = i1615[7]
  i1614.Descender = i1615[8]
  i1614.CenterLine = i1615[9]
  i1614.SuperscriptOffset = i1615[10]
  i1614.SubscriptOffset = i1615[11]
  i1614.SubSize = i1615[12]
  i1614.Underline = i1615[13]
  i1614.UnderlineThickness = i1615[14]
  i1614.strikethrough = i1615[15]
  i1614.strikethroughThickness = i1615[16]
  i1614.TabWidth = i1615[17]
  i1614.Padding = i1615[18]
  i1614.AtlasWidth = i1615[19]
  i1614.AtlasHeight = i1615[20]
  return i1614
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1618 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1619 = data
  i1618.id = i1619[0]
  i1618.x = i1619[1]
  i1618.y = i1619[2]
  i1618.width = i1619[3]
  i1618.height = i1619[4]
  i1618.xOffset = i1619[5]
  i1618.yOffset = i1619[6]
  i1618.xAdvance = i1619[7]
  i1618.scale = i1619[8]
  return i1618
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1620 = root || request.c( 'TMPro.KerningTable' )
  var i1621 = data
  var i1623 = i1621[0]
  var i1622 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.add(request.d('TMPro.KerningPair', i1623[i + 0]));
  }
  i1620.kerningPairs = i1622
  return i1620
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1626 = root || request.c( 'TMPro.KerningPair' )
  var i1627 = data
  i1626.xOffset = i1627[0]
  i1626.m_FirstGlyph = i1627[1]
  i1626.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1627[2], i1626.m_FirstGlyphAdjustments)
  i1626.m_SecondGlyph = i1627[3]
  i1626.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1627[4], i1626.m_SecondGlyphAdjustments)
  i1626.m_IgnoreSpacingAdjustments = !!i1627[5]
  return i1626
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1628 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1629 = data
  var i1631 = i1629[0]
  var i1630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1631[i + 0]));
  }
  i1628.m_GlyphPairAdjustmentRecords = i1630
  return i1628
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1634 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1635 = data
  i1634.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1635[0], i1634.m_FirstAdjustmentRecord)
  i1634.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1635[1], i1634.m_SecondAdjustmentRecord)
  i1634.m_FeatureLookupFlags = i1635[2]
  return i1634
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1636 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1637 = data
  i1636.m_GlyphIndex = i1637[0]
  i1636.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1637[1], i1636.m_GlyphValueRecord)
  return i1636
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1638 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1639 = data
  i1638.m_XPlacement = i1639[0]
  i1638.m_YPlacement = i1639[1]
  i1638.m_XAdvance = i1639[2]
  i1638.m_YAdvance = i1639[3]
  return i1638
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1642 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1643 = data
  i1642.sourceFontFileName = i1643[0]
  i1642.sourceFontFileGUID = i1643[1]
  i1642.pointSizeSamplingMode = i1643[2]
  i1642.pointSize = i1643[3]
  i1642.padding = i1643[4]
  i1642.packingMode = i1643[5]
  i1642.atlasWidth = i1643[6]
  i1642.atlasHeight = i1643[7]
  i1642.characterSetSelectionMode = i1643[8]
  i1642.characterSequence = i1643[9]
  i1642.referencedFontAssetGUID = i1643[10]
  i1642.referencedTextAssetGUID = i1643[11]
  i1642.fontStyle = i1643[12]
  i1642.fontStyleModifier = i1643[13]
  i1642.renderMode = i1643[14]
  i1642.includeFontFeatures = !!i1643[15]
  return i1642
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1646 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'regularTypeface')
  request.r(i1647[2], i1647[3], 0, i1646, 'italicTypeface')
  return i1646
}

Deserializers["EnemyInfos"] = function (request, data, root) {
  var i1648 = root || request.c( 'EnemyInfos' )
  var i1649 = data
  i1648.enemySpeed = i1649[0]
  i1648.enemyMaxHealth = i1649[1]
  request.r(i1649[2], i1649[3], 0, i1648, 'healthBar')
  var i1651 = i1649[4]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('EnemyInfosSet', i1651[i + 0]) );
  }
  i1648.enemyInfosSet = i1650
  return i1648
}

Deserializers["EnemyInfosSet"] = function (request, data, root) {
  var i1654 = root || request.c( 'EnemyInfosSet' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'body')
  request.r(i1655[2], i1655[3], 0, i1654, 'leftLeg')
  request.r(i1655[4], i1655[5], 0, i1654, 'rightLeg')
  request.r(i1655[6], i1655[7], 0, i1654, 'countryFlag')
  i1654.enemyName = i1655[8]
  return i1654
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1656 = root || request.c( 'TMPro.TMP_Settings' )
  var i1657 = data
  i1656.m_enableWordWrapping = !!i1657[0]
  i1656.m_enableKerning = !!i1657[1]
  i1656.m_enableExtraPadding = !!i1657[2]
  i1656.m_enableTintAllSprites = !!i1657[3]
  i1656.m_enableParseEscapeCharacters = !!i1657[4]
  i1656.m_EnableRaycastTarget = !!i1657[5]
  i1656.m_GetFontFeaturesAtRuntime = !!i1657[6]
  i1656.m_missingGlyphCharacter = i1657[7]
  i1656.m_warningsDisabled = !!i1657[8]
  request.r(i1657[9], i1657[10], 0, i1656, 'm_defaultFontAsset')
  i1656.m_defaultFontAssetPath = i1657[11]
  i1656.m_defaultFontSize = i1657[12]
  i1656.m_defaultAutoSizeMinRatio = i1657[13]
  i1656.m_defaultAutoSizeMaxRatio = i1657[14]
  i1656.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1657[15], i1657[16] )
  i1656.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1657[17], i1657[18] )
  i1656.m_autoSizeTextContainer = !!i1657[19]
  i1656.m_IsTextObjectScaleStatic = !!i1657[20]
  var i1659 = i1657[21]
  var i1658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1659.length; i += 2) {
  request.r(i1659[i + 0], i1659[i + 1], 1, i1658, '')
  }
  i1656.m_fallbackFontAssets = i1658
  i1656.m_matchMaterialPreset = !!i1657[22]
  request.r(i1657[23], i1657[24], 0, i1656, 'm_defaultSpriteAsset')
  i1656.m_defaultSpriteAssetPath = i1657[25]
  i1656.m_enableEmojiSupport = !!i1657[26]
  i1656.m_MissingCharacterSpriteUnicode = i1657[27]
  i1656.m_defaultColorGradientPresetsPath = i1657[28]
  request.r(i1657[29], i1657[30], 0, i1656, 'm_defaultStyleSheet')
  i1656.m_StyleSheetsResourcePath = i1657[31]
  request.r(i1657[32], i1657[33], 0, i1656, 'm_leadingCharacters')
  request.r(i1657[34], i1657[35], 0, i1656, 'm_followingCharacters')
  i1656.m_UseModernHangulLineBreakingRules = !!i1657[36]
  return i1656
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1660 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1661 = data
  i1660.hashCode = i1661[0]
  request.r(i1661[1], i1661[2], 0, i1660, 'material')
  i1660.materialHashCode = i1661[3]
  request.r(i1661[4], i1661[5], 0, i1660, 'spriteSheet')
  var i1663 = i1661[6]
  var i1662 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.add(request.d('TMPro.TMP_Sprite', i1663[i + 0]));
  }
  i1660.spriteInfoList = i1662
  var i1665 = i1661[7]
  var i1664 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1665.length; i += 2) {
  request.r(i1665[i + 0], i1665[i + 1], 1, i1664, '')
  }
  i1660.fallbackSpriteAssets = i1664
  i1660.m_Version = i1661[8]
  i1660.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1661[9], i1660.m_FaceInfo)
  var i1667 = i1661[10]
  var i1666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.add(request.d('TMPro.TMP_SpriteCharacter', i1667[i + 0]));
  }
  i1660.m_SpriteCharacterTable = i1666
  var i1669 = i1661[11]
  var i1668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.add(request.d('TMPro.TMP_SpriteGlyph', i1669[i + 0]));
  }
  i1660.m_SpriteGlyphTable = i1668
  return i1660
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1672 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1673 = data
  i1672.name = i1673[0]
  i1672.hashCode = i1673[1]
  i1672.unicode = i1673[2]
  i1672.pivot = new pc.Vec2( i1673[3], i1673[4] )
  request.r(i1673[5], i1673[6], 0, i1672, 'sprite')
  i1672.id = i1673[7]
  i1672.x = i1673[8]
  i1672.y = i1673[9]
  i1672.width = i1673[10]
  i1672.height = i1673[11]
  i1672.xOffset = i1673[12]
  i1672.yOffset = i1673[13]
  i1672.xAdvance = i1673[14]
  i1672.scale = i1673[15]
  return i1672
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1678 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1679 = data
  i1678.m_Name = i1679[0]
  i1678.m_HashCode = i1679[1]
  i1678.m_ElementType = i1679[2]
  i1678.m_Unicode = i1679[3]
  i1678.m_GlyphIndex = i1679[4]
  i1678.m_Scale = i1679[5]
  return i1678
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1682 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1683 = data
  request.r(i1683[0], i1683[1], 0, i1682, 'sprite')
  i1682.m_Index = i1683[2]
  i1682.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1683[3], i1682.m_Metrics)
  i1682.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1683[4], i1682.m_GlyphRect)
  i1682.m_Scale = i1683[5]
  i1682.m_AtlasIndex = i1683[6]
  i1682.m_ClassDefinitionType = i1683[7]
  return i1682
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1684 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1685 = data
  var i1687 = i1685[0]
  var i1686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.add(request.d('TMPro.TMP_Style', i1687[i + 0]));
  }
  i1684.m_StyleList = i1686
  return i1684
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1690 = root || request.c( 'TMPro.TMP_Style' )
  var i1691 = data
  i1690.m_Name = i1691[0]
  i1690.m_HashCode = i1691[1]
  i1690.m_OpeningDefinition = i1691[2]
  i1690.m_ClosingDefinition = i1691[3]
  i1690.m_OpeningTagArray = i1691[4]
  i1690.m_ClosingTagArray = i1691[5]
  i1690.m_OpeningTagUnicodeArray = i1691[6]
  i1690.m_ClosingTagUnicodeArray = i1691[7]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1693 = data
  var i1695 = i1693[0]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1695[i + 0]) );
  }
  i1692.files = i1694
  i1692.componentToPrefabIds = i1693[1]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1699 = data
  i1698.path = i1699[0]
  request.r(i1699[1], i1699[2], 0, i1698, 'unityObject')
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1701 = data
  var i1703 = i1701[0]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1703[i + 0]) );
  }
  i1700.scriptsExecutionOrder = i1702
  var i1705 = i1701[1]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1705[i + 0]) );
  }
  i1700.sortingLayers = i1704
  var i1707 = i1701[2]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1707[i + 0]) );
  }
  i1700.cullingLayers = i1706
  i1700.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1701[3], i1700.timeSettings)
  i1700.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1701[4], i1700.physicsSettings)
  i1700.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1701[5], i1700.physics2DSettings)
  i1700.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1701[6], i1700.qualitySettings)
  i1700.enableRealtimeShadows = !!i1701[7]
  i1700.enableAutoInstancing = !!i1701[8]
  i1700.enableDynamicBatching = !!i1701[9]
  i1700.lightmapEncodingQuality = i1701[10]
  i1700.desiredColorSpace = i1701[11]
  var i1709 = i1701[12]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( i1709[i + 0] );
  }
  i1700.allTags = i1708
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1713 = data
  i1712.name = i1713[0]
  i1712.value = i1713[1]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1717 = data
  i1716.id = i1717[0]
  i1716.name = i1717[1]
  i1716.value = i1717[2]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1721 = data
  i1720.id = i1721[0]
  i1720.name = i1721[1]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1723 = data
  i1722.fixedDeltaTime = i1723[0]
  i1722.maximumDeltaTime = i1723[1]
  i1722.timeScale = i1723[2]
  i1722.maximumParticleTimestep = i1723[3]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1725 = data
  i1724.gravity = new pc.Vec3( i1725[0], i1725[1], i1725[2] )
  i1724.defaultSolverIterations = i1725[3]
  i1724.bounceThreshold = i1725[4]
  i1724.autoSyncTransforms = !!i1725[5]
  i1724.autoSimulation = !!i1725[6]
  var i1727 = i1725[7]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1727[i + 0]) );
  }
  i1724.collisionMatrix = i1726
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1731 = data
  i1730.enabled = !!i1731[0]
  i1730.layerId = i1731[1]
  i1730.otherLayerId = i1731[2]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1733 = data
  request.r(i1733[0], i1733[1], 0, i1732, 'material')
  i1732.gravity = new pc.Vec2( i1733[2], i1733[3] )
  i1732.positionIterations = i1733[4]
  i1732.velocityIterations = i1733[5]
  i1732.velocityThreshold = i1733[6]
  i1732.maxLinearCorrection = i1733[7]
  i1732.maxAngularCorrection = i1733[8]
  i1732.maxTranslationSpeed = i1733[9]
  i1732.maxRotationSpeed = i1733[10]
  i1732.baumgarteScale = i1733[11]
  i1732.baumgarteTOIScale = i1733[12]
  i1732.timeToSleep = i1733[13]
  i1732.linearSleepTolerance = i1733[14]
  i1732.angularSleepTolerance = i1733[15]
  i1732.defaultContactOffset = i1733[16]
  i1732.autoSimulation = !!i1733[17]
  i1732.queriesHitTriggers = !!i1733[18]
  i1732.queriesStartInColliders = !!i1733[19]
  i1732.callbacksOnDisable = !!i1733[20]
  i1732.reuseCollisionCallbacks = !!i1733[21]
  i1732.autoSyncTransforms = !!i1733[22]
  var i1735 = i1733[23]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1735[i + 0]) );
  }
  i1732.collisionMatrix = i1734
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1739 = data
  i1738.enabled = !!i1739[0]
  i1738.layerId = i1739[1]
  i1738.otherLayerId = i1739[2]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1741 = data
  var i1743 = i1741[0]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1743[i + 0]) );
  }
  i1740.qualityLevels = i1742
  var i1745 = i1741[1]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( i1745[i + 0] );
  }
  i1740.names = i1744
  i1740.shadows = i1741[2]
  i1740.anisotropicFiltering = i1741[3]
  i1740.antiAliasing = i1741[4]
  i1740.lodBias = i1741[5]
  i1740.shadowCascades = i1741[6]
  i1740.shadowDistance = i1741[7]
  i1740.shadowmaskMode = i1741[8]
  i1740.shadowProjection = i1741[9]
  i1740.shadowResolution = i1741[10]
  i1740.softParticles = !!i1741[11]
  i1740.softVegetation = !!i1741[12]
  i1740.activeColorSpace = i1741[13]
  i1740.desiredColorSpace = i1741[14]
  i1740.masterTextureLimit = i1741[15]
  i1740.maxQueuedFrames = i1741[16]
  i1740.particleRaycastBudget = i1741[17]
  i1740.pixelLightCount = i1741[18]
  i1740.realtimeReflectionProbes = !!i1741[19]
  i1740.shadowCascade2Split = i1741[20]
  i1740.shadowCascade4Split = new pc.Vec3( i1741[21], i1741[22], i1741[23] )
  i1740.streamingMipmapsActive = !!i1741[24]
  i1740.vSyncCount = i1741[25]
  i1740.asyncUploadBufferSize = i1741[26]
  i1740.asyncUploadTimeSlice = i1741[27]
  i1740.billboardsFaceCameraPosition = !!i1741[28]
  i1740.shadowNearPlaneOffset = i1741[29]
  i1740.streamingMipmapsMemoryBudget = i1741[30]
  i1740.maximumLODLevel = i1741[31]
  i1740.streamingMipmapsAddAllCameras = !!i1741[32]
  i1740.streamingMipmapsMaxLevelReduction = i1741[33]
  i1740.streamingMipmapsRenderersPerFrame = i1741[34]
  i1740.resolutionScalingFixedDPIFactor = i1741[35]
  i1740.streamingMipmapsMaxFileIORequests = i1741[36]
  i1740.currentQualityLevel = i1741[37]
  return i1740
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1748 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1749 = data
  request.r(i1749[0], i1749[1], 0, i1748, 'm_ObjectArgument')
  i1748.m_ObjectArgumentAssemblyTypeName = i1749[2]
  i1748.m_IntArgument = i1749[3]
  i1748.m_FloatArgument = i1749[4]
  i1748.m_StringArgument = i1749[5]
  i1748.m_BoolArgument = !!i1749[6]
  return i1748
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1750 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1751 = data
  i1750.xPlacement = i1751[0]
  i1750.yPlacement = i1751[1]
  i1750.xAdvance = i1751[2]
  i1750.yAdvance = i1751[3]
  return i1750
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[36],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[11],"67":[11],"68":[11],"69":[11],"70":[11],"71":[11],"72":[11],"73":[11],"74":[11],"75":[11],"76":[11],"77":[11],"78":[11],"79":[36],"80":[81],"82":[83],"84":[83],"19":[18],"85":[86],"87":[4],"88":[86],"89":[18],"90":[18],"22":[19],"16":[23,18],"91":[18],"21":[19],"92":[18],"93":[18],"94":[18],"95":[18],"96":[18],"97":[18],"98":[18],"25":[18],"99":[18],"100":[23,18],"101":[18],"102":[18],"103":[18],"104":[18],"105":[23,18],"106":[18],"107":[108],"109":[108],"110":[108],"111":[108],"112":[36],"113":[36],"114":[115],"116":[36],"117":[18],"118":[81,18],"15":[18,23],"119":[18],"120":[23,18],"121":[81],"122":[23,18],"123":[18],"124":[86],"125":[36],"126":[127]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","ItemCollisionController","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Shader","UnityEngine.EdgeCollider2D","Assets.Scripts.Controllers.SwordRotateController","Assets.Scripts.Controllers.SwordCollisionController","UnityEngine.Rigidbody2D","Assets.Scripts.Controllers.EnemyInfosController","EnemyInfos","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","Assets.Scripts.Controllers.EnemyHealthController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.UI.Mask","UnityEngine.Texture2D","Assets.Scripts.Signals.PoolSignals","Assets.Scripts.Signals.PlayerSignals","Assets.Scripts.Signals.EnemySignals","PoolManager","PoolController","Assets.Scripts.Managers.PlayerManager","Assets.Scripts.Controllers.PlayerHealthController","Assets.Scripts.Managers.EnemyManager","GameController","UnityEngine.Camera","UnityEngine.AudioListener","Cinemachine.CinemachineBrain","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineFramingTransposer","PlayerMovementController","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

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

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "iOS";

Deserializers.applicationIdentifier = "com.DefaultCompany.AppleGrapple";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "14ae1b73-9661-4d6e-890e-ef64f86962aa";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

