if ( TRACE ) { TRACE( JSON.parse( '["PlayerMovementController#Start","PlayerMovementController#FixedUpdate"]' ) ); }
/**
 * @version 1.0.9065.2823
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*PlayerMovementController start.*/
    Bridge.define("PlayerMovementController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            _rb: null
        },
        methods: {
            /*PlayerMovementController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerMovementController#Start", this ); }

                this._rb = this.GetComponent(UnityEngine.Rigidbody2D);
            },
            /*PlayerMovementController.Start end.*/

            /*PlayerMovementController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "PlayerMovementController#FixedUpdate", this ); }

                var mousePosition = UnityEngine.Vector2.FromVector3(UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Input.mousePosition));

                var targetPosition = new pc.Vec2().lerp( UnityEngine.Vector2.FromVector3(this.transform.position), mousePosition, this.speed * UnityEngine.Time.fixedDeltaTime );

                this._rb.MovePosition(targetPosition);
            },
            /*PlayerMovementController.FixedUpdate end.*/


        }
    });
    /*PlayerMovementController end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine"];

    /*PlayerMovementController start.*/
    $m("PlayerMovementController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"_rb","t":4,"rt":$n[1].Rigidbody2D,"sn":"_rb"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PlayerMovementController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
