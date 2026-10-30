(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/BackgroundPhotos'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StemSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StemSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Car3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Car3D.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TeamSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TeamSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImpactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImpactSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgressSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProgressSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PartnersSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PartnersSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const ATTRACT_MS = 90_000; // 90s sem interação → volta ao #hero
function Page() {
    _s();
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const reset = {
                "Page.useEffect.reset": ()=>{
                    if (timer.current) clearTimeout(timer.current);
                    timer.current = setTimeout({
                        "Page.useEffect.reset": ()=>document.getElementById("hero")?.scrollIntoView({
                                behavior: "smooth"
                            })
                    }["Page.useEffect.reset"], ATTRACT_MS);
                }
            }["Page.useEffect.reset"];
            const evs = [
                "pointerdown",
                "keydown",
                "scroll",
                "touchstart"
            ];
            evs.forEach({
                "Page.useEffect": (e)=>window.addEventListener(e, reset, {
                        passive: true
                    })
            }["Page.useEffect"]);
            reset();
            return ({
                "Page.useEffect": ()=>{
                    evs.forEach({
                        "Page.useEffect": (e)=>window.removeEventListener(e, reset)
                    }["Page.useEffect"]);
                    if (timer.current) clearTimeout(timer.current);
                }
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundPhotos, {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StemSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Car3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 30
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TeamSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImpactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 54
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgressSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 71
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PartnersSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 90
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 109
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 39
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 27,
        columnNumber: 11
    }, this);
}
_s(Page, "vRWxipxDEtbeVwTbQlIEgCVY/F8=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Car3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Car3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Modelo 3D: coloque o arquivo em public/models/carro.glb (ou mude o caminho aqui)
const MODEL = "/models/carro.glb";
function Car3D() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // carrega o web component só no navegador
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Car3D.useEffect": ()=>{
            __turbopack_context__.A("[project]/node_modules/@google/model-viewer/lib/model-viewer.js [app-client] (ecmascript, async loader)");
        }
    }["Car3D.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Car3D.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const onError = {
                "Car3D.useEffect.onError": ()=>setFailed(true)
            }["Car3D.useEffect.onError"];
            el.addEventListener("error", onError);
            return ({
                "Car3D.useEffect": ()=>el.removeEventListener("error", onError)
            })["Car3D.useEffect"];
        }
    }["Car3D.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "car3d",
        title: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].carTitle),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-display text-cyan tracking-widest text-sm",
                children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].carTag).toUpperCase()
            }, void 0, false, {
                fileName: "[project]/src/components/Car3D.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 max-w-3xl text-muted leading-relaxed",
                children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].carText)
            }, void 0, false, {
                fileName: "[project]/src/components/Car3D.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carSpecs"].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-2xl bg-card/80 border border-cyan/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display font-bold text-cyan text-lg leading-tight",
                                children: t(x.big)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Car3D.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted mt-2",
                                children: t(x.label)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Car3D.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, x.label.en, true, {
                        fileName: "[project]/src/components/Car3D.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Car3D.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 p-5 rounded-2xl bg-card/60 border border-cyan/20 max-w-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display font-bold text-sm text-cyan",
                        children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].carAeroTitle)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Car3D.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-muted",
                        children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].carAero)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Car3D.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Car3D.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-10 mb-4 text-muted text-sm",
                children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].car3dText)
            }, void 0, false, {
                fileName: "[project]/src/components/Car3D.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[55vh] rounded-3xl border border-cyan/30 bg-card/60 overflow-hidden",
                children: failed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex items-center justify-center text-muted text-sm",
                    children: "carro.glb"
                }, void 0, false, {
                    fileName: "[project]/src/components/Car3D.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("model-viewer", {
                    ref: ref,
                    src: MODEL,
                    alt: "Carro da Vyperion Racing",
                    "camera-controls": true,
                    "auto-rotate": true,
                    "rotation-per-second": "10deg",
                    "auto-rotate-delay": "1500",
                    "interaction-prompt": "none",
                    "disable-zoom": true,
                    "touch-action": "none",
                    "shadow-intensity": "1",
                    style: {
                        width: "100%",
                        height: "100%",
                        background: "transparent"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Car3D.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Car3D.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Car3D.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Car3D, "3Lg74Qi5JaVRt0p/gNbmNW5C/rk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = Car3D;
var _c;
__turbopack_context__.k.register(_c, "Car3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Img$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Img.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogoTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LogoTile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/images.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function ContactSection() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const btn = "btn flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-cyan bg-card/80 font-display font-bold";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "contact",
                title: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].contactTitle),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-5 max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                whileTap: {
                                    scale: 0.95
                                },
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["links"].instagram,
                                target: "_blank",
                                rel: "noreferrer",
                                className: btn,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {}, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 18,
                                        columnNumber: 118
                                    }, this),
                                    " Instagram"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 18,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                whileTap: {
                                    scale: 0.95
                                },
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["links"].email}`,
                                className: btn,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {}, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.tsx",
                                        lineNumber: 19,
                                        columnNumber: 93
                                    }, this),
                                    " E-mail"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 19,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 17,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 w-44 h-44 rounded-2xl border border-cyan/40 bg-white flex items-center justify-center overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Img$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].qr,
                            alt: "QR Code",
                            className: "w-full h-full object-contain p-2",
                            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-navy/60 text-sm",
                                children: "QR Code"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 22,
                                columnNumber: 99
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 22,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 21,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-8 text-muted max-w-xl",
                        children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].contactText)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 24,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactSection.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-cyan/25 bg-card/70 px-6 py-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-display text-xs tracking-[0.3em] text-cyan",
                        children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].sponsors).toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 28,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex flex-wrap items-center justify-center gap-5 md:gap-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partners"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogoTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                name: p.name,
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partnerLogos"][p.name],
                                link: p.link,
                                size: "w-24 h-24 md:w-32 md:h-32"
                            }, p.name, false, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 30,
                                columnNumber: 30
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 29,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 mx-auto w-14 h-14 rounded-full border-2 border-cyan flex items-center justify-center overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Img$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].logo,
                            alt: "Vyperion",
                            className: "w-full h-full object-contain p-1",
                            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-cyan",
                                children: "VR"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactSection.tsx",
                                lineNumber: 33,
                                columnNumber: 102
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactSection.tsx",
                            lineNumber: 33,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 32,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 font-display text-sm",
                        children: "VYPERION RACING © 2026 · Colégio SESI Cascavel — PR"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 35,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-cyan font-display text-xs",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagline"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactSection.tsx",
                        lineNumber: 36,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactSection.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactSection.tsx",
        lineNumber: 15,
        columnNumber: 11
    }, this);
}
_s(ContactSection, "p2BMN842WmXaElEn1NQnTw7gg40=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Img$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Img.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/images.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Hero() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-12 gap-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.97
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: {
                duration: 0.6
            },
            className: "flex flex-col items-center gap-5 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-32 h-32 rounded-full border-2 border-cyan shadow-glow flex items-center justify-center overflow-hidden bg-card",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Img$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].logo,
                        alt: "Vyperion Racing",
                        className: "w-full h-full object-contain p-3",
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display text-4xl text-cyan",
                            children: "VR"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 13,
                            columnNumber: 111
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-display font-black text-4xl md:text-6xl lg:text-7xl tracking-wide",
                    children: "VYPERION RACING"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-display text-xl md:text-2xl text-cyan",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagline"]
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-display text-sm text-muted tracking-widest",
                    children: "STEM RACING 2026/2027"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-muted",
                    children: "Cascavel · Brazil"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-xl h-40 md:h-56 rounded-2xl border border-cyan/30 bg-card/70 flex items-center justify-center overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Img$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].car,
                        alt: "Apólo",
                        className: "w-full h-full object-contain",
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-muted text-sm",
                            children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].carPhoto)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 20,
                            columnNumber: 96
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-24 px-8 rounded-2xl bg-white flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Img$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].stemLogo,
                        alt: "STEM Racing",
                        className: "h-16 w-auto max-w-[260px] object-contain",
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display font-bold text-navy",
                            children: "STEM RACING"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 23,
                            columnNumber: 119
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    whileTap: {
                        scale: 0.95
                    },
                    onClick: ()=>document.getElementById("stem")?.scrollIntoView({
                            behavior: "smooth"
                        }),
                    className: "btn px-10 rounded-full bg-cyan text-navy font-display font-bold text-lg",
                    children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].explore)
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(Hero, "p2BMN842WmXaElEn1NQnTw7gg40=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Img.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Img
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Img({ src, alt, className = "", fallback }) {
    _s();
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!src || failed) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: fallback
    }, void 0, false, {
        fileName: "[project]/src/components/Img.tsx",
        lineNumber: 6,
        columnNumber: 30
    }, this);
    // eslint-disable-next-line @next/next/no-img-element
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: src,
        alt: alt,
        className: className,
        onError: ()=>setFailed(true)
    }, void 0, false, {
        fileName: "[project]/src/components/Img.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_s(Img, "BFa/7w0IiJnSoWJxZHxuU4kOwF4=");
_c = Img;
var _c;
__turbopack_context__.k.register(_c, "Img");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ImpactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImpactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ImpactSection() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "impact",
        title: "Beyond the Track",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-3xl text-muted leading-relaxed",
                children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].impactText)
            }, void 0, false, {
                fileName: "[project]/src/components/ImpactSection.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
                initial: "hidden",
                whileInView: "show",
                viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vp"],
                className: "mt-10 grid md:grid-cols-2 gap-6 items-start",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["impactCards"].map((c)=>{
                    const isOpen = open === c.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rise"],
                        className: "rounded-2xl bg-card/80 border border-cyan/30 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileTap: {
                                    scale: 0.95
                                },
                                onClick: ()=>setOpen(isOpen ? null : c.id),
                                className: "w-full text-left p-6 min-h-[56px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-xl font-bold text-cyan",
                                        children: t(c.title)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ImpactSection.tsx",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted mt-2",
                                        children: t(c.summary)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ImpactSection.tsx",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display font-black text-4xl text-cyan",
                                                children: c.stat
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ImpactSection.tsx",
                                                lineNumber: 20,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-display text-sm",
                                                        children: t(c.statTitle)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ImpactSection.tsx",
                                                        lineNumber: 21,
                                                        columnNumber: 22
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted",
                                                        children: t(c.statText)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ImpactSection.tsx",
                                                        lineNumber: 21,
                                                        columnNumber: 78
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ImpactSection.tsx",
                                                lineNumber: 21,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ImpactSection.tsx",
                                        lineNumber: 19,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-sm text-teal",
                                        children: isOpen ? t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].close) : t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].more)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ImpactSection.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ImpactSection.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                initial: false,
                                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].ul, {
                                    initial: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        height: "auto",
                                        opacity: 1
                                    },
                                    exit: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    className: "overflow-hidden px-6 space-y-3 text-sm",
                                    children: [
                                        c.details.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: t(d)
                                            }, d.en, false, {
                                                fileName: "[project]/src/components/ImpactSection.tsx",
                                                lineNumber: 27,
                                                columnNumber: 39
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "pb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ImpactSection.tsx",
                                            lineNumber: 27,
                                            columnNumber: 67
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ImpactSection.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ImpactSection.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        ]
                    }, c.id, true, {
                        fileName: "[project]/src/components/ImpactSection.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ImpactSection.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ImpactSection.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(ImpactSection, "UG4+1SOdsflJdGccOGWw0VNX0YM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = ImpactSection;
var _c;
__turbopack_context__.k.register(_c, "ImpactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LogoTile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LogoTile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Img$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Img.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/images.ts [app-client] (ecmascript)");
"use client";
;
;
;
function LogoTile({ name, src, link, size }) {
    const dark = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darkLogos"].includes(name);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: link,
        "aria-label": name,
        className: `${size} shrink-0 rounded-2xl p-1.5 flex items-center justify-center overflow-hidden ${dark ? "bg-card border border-cyan/40" : "bg-white"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Img$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: src,
            alt: name,
            className: "w-full h-full object-contain rounded-xl",
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `px-2 text-center text-xs font-bold ${dark ? "text-white" : "text-navy/70"}`,
                children: name
            }, void 0, false, {
                fileName: "[project]/src/components/LogoTile.tsx",
                lineNumber: 11,
                columnNumber: 19
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/LogoTile.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LogoTile.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = LogoTile;
var _c;
__turbopack_context__.k.register(_c, "LogoTile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize.js [app-client] (ecmascript) <export default as Maximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const items = [
    {
        id: "hero",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        id: "stem",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"]
    },
    {
        id: "car3d",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"]
    },
    {
        id: "team",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        id: "impact",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"]
    },
    {
        id: "progress",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
    },
    {
        id: "partners",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"]
    },
    {
        id: "contact",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"]
    }
];
function Navigation() {
    _s();
    const { t, lang, toggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hero");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const obs = new IntersectionObserver({
                "Navigation.useEffect": (es)=>es.forEach({
                        "Navigation.useEffect": (e)=>e.isIntersecting && setActive(e.target.id)
                    }["Navigation.useEffect"])
            }["Navigation.useEffect"], {
                rootMargin: "-40% 0px -55% 0px"
            });
            items.forEach({
                "Navigation.useEffect": ({ id })=>{
                    const el = document.getElementById(id);
                    if (el) obs.observe(el);
                }
            }["Navigation.useEffect"]);
            return ({
                "Navigation.useEffect": ()=>obs.disconnect()
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    const go = (id)=>document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
    const fs = ()=>{
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        transition: {
            duration: 0.6
        },
        className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-navy/75 border-b border-cyan/25",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-1 px-2 md:px-6 overflow-x-auto",
            children: [
                items.map(({ id, Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: ()=>go(id),
                        "aria-label": t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].nav[id]),
                        className: `btn flex items-center gap-2 px-3 md:px-4 rounded-lg font-display text-xs md:text-sm whitespace-nowrap transition-colors ${active === id ? "text-cyan bg-cyan/10" : "text-muted"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].nav[id])
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 28,
                                columnNumber: 31
                            }, this)
                        ]
                    }, id, true, {
                        fileName: "[project]/src/components/Navigation.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    whileTap: {
                        scale: 0.95
                    },
                    onClick: toggle,
                    "aria-label": "Language",
                    className: "btn flex items-center gap-2 px-4 rounded-full border border-cyan text-cyan font-display text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        lang === "pt" ? "EN" : "PT"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    whileTap: {
                        scale: 0.95
                    },
                    onClick: fs,
                    "aria-label": t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].fullscreen),
                    className: "btn px-3 text-muted",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize$3e$__["Maximize"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navigation.tsx",
                        lineNumber: 34,
                        columnNumber: 126
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navigation.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navigation.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(Navigation, "d4yNNFNB579xbulcpUZhpa2fnq8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PartnersSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PartnersSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogoTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LogoTile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/images.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Todos os logos têm o mesmo tamanho.
function Group({ title, items }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-12 mb-6 font-display font-bold text-lg md:text-xl text-center",
                children: t(title)
            }, void 0, false, {
                fileName: "[project]/src/components/PartnersSection.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
                initial: "hidden",
                whileInView: "show",
                viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vp"],
                className: "flex flex-wrap justify-center gap-6 md:gap-8",
                children: items.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rise"],
                        whileTap: {
                            scale: 0.95
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogoTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: p.name,
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partnerLogos"][p.name],
                            link: p.link,
                            size: "w-40 h-40 md:w-48 md:h-48"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PartnersSection.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    }, p.name, false, {
                        fileName: "[project]/src/components/PartnersSection.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/PartnersSection.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PartnersSection.tsx",
        lineNumber: 13,
        columnNumber: 11
    }, this);
}
_s(Group, "p2BMN842WmXaElEn1NQnTw7gg40=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = Group;
function PartnersSection() {
    _s1();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "partners",
        title: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].partnersTitle),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-3xl mx-auto text-center text-muted leading-relaxed",
                children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].partnersText)
            }, void 0, false, {
                fileName: "[project]/src/components/PartnersSection.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].institutionsTitle,
                items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partners"].filter((p)=>p.kind === "institution")
            }, void 0, false, {
                fileName: "[project]/src/components/PartnersSection.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].sponsorsTitle,
                items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partners"].filter((p)=>p.kind === "sponsor")
            }, void 0, false, {
                fileName: "[project]/src/components/PartnersSection.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-12 text-center text-sm text-muted",
                children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].partnersCount)
            }, void 0, false, {
                fileName: "[project]/src/components/PartnersSection.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                    whileTap: {
                        scale: 0.95
                    },
                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["links"].email}?subject=Parceria Vyperion Racing`,
                    className: "btn inline-flex items-center px-10 rounded-full bg-cyan text-navy font-display font-bold",
                    children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].becomePartner)
                }, void 0, false, {
                    fileName: "[project]/src/components/PartnersSection.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PartnersSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PartnersSection.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s1(PartnersSection, "p2BMN842WmXaElEn1NQnTw7gg40=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c1 = PartnersSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "Group");
__turbopack_context__.k.register(_c1, "PartnersSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProgressSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProgressSection() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "progress",
        title: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].journeyTitle),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
            initial: "hidden",
            whileInView: "show",
            viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vp"],
            className: "flex gap-6 overflow-x-auto pb-6 snap-x",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelineEvents"].map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rise"],
                    className: `snap-start shrink-0 w-64 border-t-2 pt-4 relative ${e.future ? "border-cyan" : "border-cyan/50"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `absolute -top-[7px] left-0 w-3 h-3 rounded-full ${e.future ? "bg-cyan" : "bg-teal"}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProgressSection.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-display text-cyan text-sm",
                            children: t(e.date)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProgressSection.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this),
                        e.future && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block mt-1 px-2 py-0.5 rounded-full border border-cyan text-cyan text-[10px] font-display",
                            children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].upcoming)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProgressSection.tsx",
                            lineNumber: 16,
                            columnNumber: 26
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold mt-2",
                            children: t(e.title)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProgressSection.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted mt-1",
                            children: t(e.text)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProgressSection.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this)
                    ]
                }, e.date.en, true, {
                    fileName: "[project]/src/components/ProgressSection.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ProgressSection.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ProgressSection.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(ProgressSection, "p2BMN842WmXaElEn1NQnTw7gg40=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = ProgressSection;
var _c;
__turbopack_context__.k.register(_c, "ProgressSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Section,
    "rise",
    ()=>rise,
    "stagger",
    ()=>stagger,
    "vp",
    ()=>vp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const vp = {
    once: false,
    amount: 0.15
};
const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08
        }
    }
};
const rise = {
    hidden: {
        opacity: 0,
        y: 16
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
};
function Section({ id, title, subtitle, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: "min-h-screen px-6 md:px-12 lg:px-20 py-24 max-w-7xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: false,
                amount: 0.05
            },
            transition: {
                duration: 0.5
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display font-bold text-3xl md:text-5xl text-cyan",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/Section.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 h-[2px] w-24 bg-cyan/70"
                }, void 0, false, {
                    fileName: "[project]/src/components/Section.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-muted",
                    children: subtitle
                }, void 0, false, {
                    fileName: "[project]/src/components/Section.tsx",
                    lineNumber: 14,
                    columnNumber: 22
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/Section.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Section.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Section.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StemSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StemSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.js [app-client] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/factory.js [app-client] (ecmascript) <export default as Factory>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wind.js [app-client] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$presentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Presentation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/presentation.js [app-client] (ecmascript) <export default as Presentation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-handshake.js [app-client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const stepIcons = {
    pencil: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"],
    wrench: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
    flask: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
    flag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"]
};
const taskIcons = {
    ruler: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"],
    factory: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__["Factory"],
    wind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"],
    megaphone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
    presentation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$presentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Presentation$3e$__["Presentation"],
    heart: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"]
};
const letters = [
    "Science",
    "Technology",
    "Engineering",
    "Mathematics"
];
function StemSection() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "stem",
        title: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].stemTitle),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-3xl text-muted leading-relaxed",
                children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].stemIntro)
            }, void 0, false, {
                fileName: "[project]/src/components/StemSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
                initial: "hidden",
                whileInView: "show",
                viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vp"],
                className: "mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stemFacts"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rise"],
                        className: "p-4 rounded-2xl bg-card/80 border border-cyan/30 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display font-bold text-2xl md:text-3xl text-cyan",
                                children: f.big
                            }, void 0, false, {
                                fileName: "[project]/src/components/StemSection.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted mt-1",
                                children: t(f.label)
                            }, void 0, false, {
                                fileName: "[project]/src/components/StemSection.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, f.big, true, {
                        fileName: "[project]/src/components/StemSection.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/StemSection.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
                initial: "hidden",
                whileInView: "show",
                viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vp"],
                className: "mt-8 flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-muted mr-2",
                        children: "STEM ="
                    }, void 0, false, {
                        fileName: "[project]/src/components/StemSection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    letters.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rise"],
                            className: "flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/40 bg-card/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    className: "font-display text-cyan",
                                    children: x[0]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StemSection.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: x
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StemSection.tsx",
                                    lineNumber: 28,
                                    columnNumber: 61
                                }, this)
                            ]
                        }, x, true, {
                            fileName: "[project]/src/components/StemSection.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StemSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-14 font-display font-bold text-xl md:text-2xl",
                children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].whatTeamDoes)
            }, void 0, false, {
                fileName: "[project]/src/components/StemSection.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
                initial: "hidden",
                whileInView: "show",
                viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vp"],
                className: "mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stemTasks"].map((k)=>{
                    const Icon = taskIcons[k.icon];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rise"],
                        className: "flex gap-4 p-5 rounded-2xl bg-card/80 border border-cyan/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "text-cyan shrink-0",
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/components/StemSection.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-display font-bold text-sm",
                                        children: t(k.title)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StemSection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted mt-1",
                                        children: t(k.text)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StemSection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 82
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StemSection.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, k.icon, true, {
                        fileName: "[project]/src/components/StemSection.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/StemSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-14 font-display font-bold text-xl md:text-2xl",
                children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].fourSteps)
            }, void 0, false, {
                fileName: "[project]/src/components/StemSection.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
                initial: "hidden",
                whileInView: "show",
                viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vp"],
                className: "mt-5 grid grid-cols-2 lg:grid-cols-4 gap-5",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stemSteps"].map((s)=>{
                    const Icon = stepIcons[s.icon];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rise"],
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: ()=>setOpen(open === s.n ? null : s.n),
                        className: "text-left p-5 rounded-2xl bg-card/80 border border-cyan/30 shadow-glow min-h-[56px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "text-cyan",
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/components/StemSection.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 font-display text-cyan text-sm",
                                children: [
                                    "0",
                                    s.n
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StemSection.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-display font-bold",
                                children: s.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/StemSection.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted mt-1",
                                children: t(s.short)
                            }, void 0, false, {
                                fileName: "[project]/src/components/StemSection.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: open === s.n && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        height: "auto",
                                        opacity: 1
                                    },
                                    exit: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    className: "overflow-hidden text-sm mt-3 text-white",
                                    children: t(s.extra)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StemSection.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/StemSection.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.n, true, {
                        fileName: "[project]/src/components/StemSection.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/StemSection.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/StemSection.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(StemSection, "UG4+1SOdsflJdGccOGWw0VNX0YM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = StemSection;
var _c;
__turbopack_context__.k.register(_c, "StemSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TeamSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Img$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Img.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/images.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function TeamSection() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const [shown, setShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: "team",
        title: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].aboutTitle),
        subtitle: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].aboutSub),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-3xl text-muted leading-relaxed",
                children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].aboutText)
            }, void 0, false, {
                fileName: "[project]/src/components/TeamSection.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-display text-sm text-cyan mb-3",
                        children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].pillarsTitle)
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeamSection.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pillars"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-4 py-2 rounded-full border border-cyan/40 bg-card/80 text-sm",
                                children: t(p)
                            }, p.en, false, {
                                fileName: "[project]/src/components/TeamSection.tsx",
                                lineNumber: 18,
                                columnNumber: 31
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/TeamSection.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TeamSection.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Img$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"].teamPhoto,
                alt: "Equipe Vyperion Racing",
                className: "mt-10 w-full max-w-3xl rounded-2xl border border-cyan/30",
                fallback: null
            }, void 0, false, {
                fileName: "[project]/src/components/TeamSection.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-14 font-display font-bold text-xl md:text-2xl",
                children: t(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].teamTitle)
            }, void 0, false, {
                fileName: "[project]/src/components/TeamSection.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"],
                initial: "hidden",
                whileInView: "show",
                viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vp"],
                className: "mt-6 grid grid-cols-2 lg:grid-cols-3 gap-5",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamMembers"].map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rise"],
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: ()=>setShown(shown === i ? null : i),
                        className: "p-5 rounded-2xl bg-card/80 border border-cyan/20 text-center min-h-[220px] flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 rounded-full border-2 border-cyan overflow-hidden flex items-center justify-center font-display text-2xl text-cyan",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Img$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamPhotos"][m.name],
                                    alt: m.name,
                                    className: "w-full h-full object-cover",
                                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: m.name[0]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TeamSection.tsx",
                                        lineNumber: 28,
                                        columnNumber: 107
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TeamSection.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TeamSection.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-display font-bold text-sm",
                                children: m.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/TeamSection.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-teal",
                                children: t(m.role)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TeamSection.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-xs text-muted transition-opacity duration-300 ${shown === i ? "opacity-100" : "opacity-0"}`,
                                children: t(m.bio)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TeamSection.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, m.name, true, {
                        fileName: "[project]/src/components/TeamSection.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/TeamSection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TeamSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(TeamSection, "0dFVBZQRR8rilhRpKLegvT+AbL8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
_c = TeamSection;
var _c;
__turbopack_context__.k.register(_c, "TeamSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// EDITE AQUI: textos e dados, sempre em PT e EN.
__turbopack_context__.s([
    "L",
    ()=>L,
    "carSpecs",
    ()=>carSpecs,
    "impactCards",
    ()=>impactCards,
    "links",
    ()=>links,
    "partners",
    ()=>partners,
    "pillars",
    ()=>pillars,
    "stemFacts",
    ()=>stemFacts,
    "stemSteps",
    ()=>stemSteps,
    "stemTasks",
    ()=>stemTasks,
    "tagline",
    ()=>tagline,
    "teamMembers",
    ()=>teamMembers,
    "timelineEvents",
    ()=>timelineEvents,
    "ui",
    ()=>ui
]);
const L = (pt, en)=>({
        pt,
        en
    });
_c = L;
const tagline = "Modern, Fast, Vyperion.";
const links = {
    instagram: "https://instagram.com/vyperionracing",
    email: "contato@vyperionracing.com"
};
const ui = {
    nav: {
        hero: L("Home", "Home"),
        stem: L("STEM", "STEM"),
        car3d: L("O Carro", "The Car"),
        team: L("Sobre", "About"),
        impact: L("Impacto", "Impact"),
        progress: L("Jornada", "Journey"),
        partners: L("Parceiros", "Partners"),
        contact: L("Contato", "Contact")
    },
    explore: L("Explore a Equipe ↓", "Explore the Team ↓"),
    fullscreen: L("Tela cheia", "Fullscreen"),
    more: L("▼ Saiba mais", "▼ Learn more"),
    close: L("▲ Fechar", "▲ Close"),
    stemTitle: L("O que é a STEM Racing?", "What is STEM Racing?"),
    stemIntro: L("A STEM Racing, antiga F1 in Schools, é uma competição internacional de educação STEM apoiada pela Formula 1. Cada equipe funciona como uma pequena escuderia: projeta, constrói, testa e corre com um carro de Fórmula 1 em miniatura, enquanto cuida de marca, finanças, patrocínios e apresentações. No Brasil, o programa é representado pelo STEM Racing Brazil e também conta com o SESI.", "STEM Racing, formerly F1 in Schools, is an international STEM education competition endorsed by Formula 1. Each team works like a small F1 team: it designs, builds, tests and races a miniature Formula 1 car while managing branding, finances, sponsorship and presentations. In Brazil the program is represented by STEM Racing Brazil and also involves SESI."),
    whatTeamDoes: L("O que uma equipe faz", "What a team does"),
    fourSteps: L("As 4 etapas", "The 4 stages"),
    // Sobre nós
    aboutTitle: L("Sobre Nós", "About Us"),
    aboutSub: L("Quem somos", "Who We Are"),
    aboutText: L("A Vyperion Racing é uma equipe estudantil de STEM Racing do Colégio SESI, apoiada pelo SENAI, dedicada a unir engenharia, tecnologia, inovação e trabalho em equipe para desenvolver um carro de corrida em miniatura de alto desempenho, gerando impacto social e ambiental positivo além da pista.", "Vyperion Racing is a student-led STEM Racing team from Colégio SESI, supported by SENAI, dedicated to combining engineering, technology, innovation, and teamwork to develop a high-performance miniature racing car while creating positive social and environmental impact beyond the track."),
    pillarsTitle: L("Nossos Pilares", "Our Pillars"),
    teamTitle: L("Nossa Equipe", "Our People"),
    // Impacto
    impactText: L("Nosso impacto vai além da pista: um projeto social de iniciação científica em escolas públicas e um projeto de moda sustentável com crianças.", "Our impact goes beyond the track: a social science-outreach project in public schools and a sustainable fashion project with children."),
    // Jornada
    journeyTitle: L("Nossa Jornada", "Our Journey"),
    upcoming: L("Em breve", "Upcoming"),
    // Carro
    carTitle: L("Conheça o Apólo", "Meet Apólo"),
    carTag: L("Projetado para a velocidade", "Engineered for speed"),
    carText: L("O Apólo é o carro de corrida em miniatura da Vyperion Racing, desenvolvido para combinar eficiência aerodinâmica, construção leve e engenharia de precisão.", "Apólo is Vyperion Racing’s miniature race car, developed to combine aerodynamic efficiency, lightweight construction, and precision engineering."),
    carAeroTitle: L("Características aerodinâmicas", "Aerodynamic Features"),
    carAero: L("O Apólo tem uma estrutura oca, leve e em formato de flecha, projetada para reduzir o arrasto aerodinâmico e melhorar o desempenho na pista.", "Apólo features a hollow, lightweight, arrow-shaped structure designed to reduce aerodynamic drag and enhance racing performance."),
    car3dText: L("Arraste para girar o carro em 360°.", "Drag to rotate the car 360°."),
    carPhoto: L("Foto do carro", "Car photo"),
    // Parceiros
    partnersTitle: L("Powered by Partnerships", "Powered by Partnerships"),
    partnersText: L("Nossas instituições de ensino e patrocinadores têm um papel essencial na jornada da Vyperion Racing, apoiando a inovação, a engenharia, a educação e o desenvolvimento de jovens talentos.", "Our educational institutions and sponsors play an essential role in Vyperion Racing’s journey, supporting innovation, engineering, education, and the development of young talents."),
    institutionsTitle: L("Instituições de Ensino", "Educational Institutions"),
    sponsorsTitle: L("Nossos Patrocinadores", "Our Sponsors"),
    partnersCount: L("15 organizações de apoio — 2 instituições de ensino e 13 patrocinadores.", "15 supporting organizations — 2 educational institutions and 13 sponsors."),
    becomePartner: L("Seja nosso parceiro →", "Become our partner →"),
    sponsors: L("Patrocinadores", "Sponsors"),
    contactTitle: L("Join Our Journey", "Join Our Journey"),
    contactText: L("Gostou da nossa história? Siga a equipe, escreva para nós e venha fazer parte dessa jornada.", "Enjoyed our story? Follow the team, write to us and be part of this journey.")
};
const pillars = [
    L("Inovação", "Innovation"),
    L("Engenharia", "Engineering"),
    L("Tecnologia", "Technology"),
    L("Trabalho em equipe", "Teamwork"),
    L("Sustentabilidade", "Sustainability"),
    L("Impacto Social", "Social Impact")
];
const stemFacts = [
    {
        big: "9–19",
        label: L("anos: idade dos estudantes", "years: student age range")
    },
    {
        big: "1/20",
        label: L("escala do carro em miniatura", "miniature car scale")
    },
    {
        big: "20 m",
        label: L("pista reta de corrida", "straight race track")
    },
    {
        big: "1999",
        label: L("origem, como F1 in Schools", "origin, as F1 in Schools")
    }
];
const stemTasks = [
    {
        icon: "ruler",
        title: L("Projetar", "Design"),
        text: L("Carro aerodinâmico em CAD, seguindo o regulamento técnico.", "Aerodynamic CAD car built to the technical regulations.")
    },
    {
        icon: "factory",
        title: L("Fabricar e testar", "Build & test"),
        text: L("Produção, testes e ajustes de desempenho.", "Manufacturing, testing and performance tuning.")
    },
    {
        icon: "wind",
        title: L("Correr", "Race"),
        text: L("Lançamento por cartucho de ar comprimido na pista de 20 m.", "Compressed-air cartridge launch on the 20 m track.")
    },
    {
        icon: "megaphone",
        title: L("Criar a marca", "Build the brand"),
        text: L("Identidade visual, uniformes, patrocínios e redes sociais.", "Visual identity, uniforms, sponsorship and social media.")
    },
    {
        icon: "presentation",
        title: L("Apresentar", "Present"),
        text: L("Portfólios e apresentação oral para jurados.", "Portfolios and oral presentation to judges.")
    },
    {
        icon: "heart",
        title: L("Gerar impacto social", "Create social impact"),
        text: L("Projetos sociais fazem parte da avaliação no Brasil.", "Social projects are part of the judging in Brazil.")
    }
];
const stemSteps = [
    {
        n: 1,
        title: "DESIGN",
        short: L("Projeto em CAD e aerodinâmica", "CAD and aerodynamics"),
        extra: L("Modelamos o carro em 3D e simulamos o fluxo de ar para reduzir o arrasto.", "We model the car in 3D and simulate airflow to reduce drag."),
        icon: "pencil"
    },
    {
        n: 2,
        title: "MANUFACTURE",
        short: L("Usinagem CNC e impressão 3D", "CNC machining and 3D printing"),
        extra: L("O corpo é usinado em CNC e peças auxiliares são impressas em 3D.", "The body is CNC machined and auxiliary parts are 3D printed."),
        icon: "wrench"
    },
    {
        n: 3,
        title: "TEST",
        short: L("Vistoria técnica e testes de pista", "Scrutineering and track tests"),
        extra: L("Medimos peso e dimensões e repetimos lançamentos para validar o projeto.", "We measure weight and dimensions and repeat launches to validate the design."),
        icon: "flask"
    },
    {
        n: 4,
        title: "RACE",
        short: L("Lançamento com CO₂ em 20 metros", "CO₂ launch over 20 meters"),
        extra: L("O cartucho impulsiona o carro pela pista reta em poucos décimos de segundo.", "The cartridge propels the car down the straight track in a fraction of a second."),
        icon: "flag"
    }
];
const teamMembers = [
    {
        name: "Alexandra Rodriguez",
        role: L("Gestão de Projetos", "Project Management"),
        bio: L("Lidera a equipe, gerencia cronogramas, coordena tarefas e acompanha o progresso do projeto.", "Leads the team, manages schedules, coordinates tasks, and monitors project progress.")
    },
    {
        name: "Nicolle Tebaldi",
        role: L("Marketing", "Marketing"),
        bio: L("Gerencia as redes sociais, as campanhas promocionais e a imagem pública da equipe.", "Manages social media, promotional campaigns, and the team’s public image.")
    },
    {
        name: "Nicoly de Lara",
        role: L("Empresarial", "Enterprise"),
        bio: L("Gerencia finanças, patrocínios, parcerias e o planejamento de recursos.", "Manages finances, sponsorships, partnerships, and resource planning.")
    },
    {
        name: "Lucas Sousa",
        role: L("Engenheiro de Design", "Design Engineer"),
        bio: L("Projeta e otimiza a geometria, a aerodinâmica e o modelo 3D do carro.", "Designs and optimizes the car’s geometry, aerodynamics, and 3D model.")
    },
    {
        name: "Hilary de Oliveira",
        role: L("Projeto Social", "Social Project"),
        bio: L("Planeja e coordena iniciativas sociais, oficinas e o envolvimento com a comunidade.", "Plans and coordinates social initiatives, workshops, and community engagement.")
    },
    {
        name: "João Stein",
        role: L("Engenheiro de Manufatura", "Manufacturing Engineer"),
        bio: L("Supervisiona a fabricação, a montagem, o controle de qualidade e os ajustes técnicos do carro.", "Oversees car manufacturing, assembly, quality control, and technical adjustments.")
    }
];
const timelineEvents = [
    {
        date: L("3 de março de 2026", "March 3, 2026"),
        title: L("Início do Projeto", "Project Kickoff"),
        text: L("Início oficial do projeto Vyperion Racing.", "Official start of the Vyperion Racing project.")
    },
    {
        date: L("18 de março de 2026", "March 18, 2026"),
        title: L("Lançamento do Projeto Social", "Social Project Launch"),
        text: L("Começa a iniciativa de impacto social da equipe.", "Beginning of the team’s social impact initiative.")
    },
    {
        date: L("28 de abril de 2026", "April 28, 2026"),
        title: L("Busca por Patrocínios", "Sponsorship Outreach"),
        text: L("Início da prospecção de patrocínios e do desenvolvimento de parcerias.", "Start of sponsorship prospecting and partnership development.")
    },
    {
        date: L("21 de maio de 2026", "May 21, 2026"),
        title: L("Primeiro Evento — Technovação", "First Event — Technovação"),
        text: L("Participação da equipe em seu primeiro evento.", "Team participation in its first event.")
    },
    {
        date: L("11 de junho de 2026", "June 11, 2026"),
        title: L("Rebranding da Vyperion Racing", "Vyperion Racing Rebranding"),
        text: L("Lançamento da identidade visual renovada da equipe.", "Launch of the team’s renewed visual identity.")
    },
    {
        date: L("24 de junho de 2026", "June 24, 2026"),
        title: L("Primeiro Parceiro", "First Partner"),
        text: L("Primeira parceria oficial conquistada.", "First official partnership secured.")
    },
    {
        date: L("27 de outubro de 2026", "October 27, 2026"),
        title: L("Preparação Final", "Final Preparations"),
        text: L("Ajustes finais e preparação para o festival regional.", "Final adjustments and preparations for the regional festival.")
    },
    {
        date: L("12 de novembro de 2026", "November 12, 2026"),
        title: L("Festival Regional de Robótica SESI", "SESI Regional Robotics Festival"),
        text: L("Próxima competição regional de STEM Racing.", "Upcoming regional STEM Racing competition."),
        future: true
    }
];
const carSpecs = [
    {
        big: L("47 g", "47 g"),
        label: L("Massa do carro", "Car Mass")
    },
    {
        big: L("Poliuretano + Impressão 3D", "Polyurethane + 3D Printing"),
        label: L("Materiais de fabricação", "Manufacturing Materials")
    },
    {
        big: L("Autodesk Fusion", "Autodesk Fusion"),
        label: L("Software de modelagem 3D", "3D Modeling Software")
    },
    {
        big: L("Formato de flecha", "Arrow-Shaped"),
        label: L("Design aerodinâmico", "Aerodynamic Design")
    }
];
const partners = [
    {
        name: "Colégio SESI",
        kind: "institution",
        link: "#"
    },
    {
        name: "SENAI",
        kind: "institution",
        link: "#"
    },
    {
        name: "Studio Sherpe",
        kind: "sponsor",
        link: "#"
    },
    {
        name: "RM Usinagem",
        kind: "sponsor",
        link: "#"
    },
    {
        name: "Rhaela Semijoias",
        kind: "sponsor",
        link: "#"
    },
    {
        name: "Imprecad Gráfica Rápida",
        kind: "sponsor",
        link: "#"
    },
    {
        name: "Boys Express",
        kind: "sponsor",
        link: "#"
    },
    {
        name: "Ceola Uniformes",
        kind: "sponsor",
        link: "#"
    },
    {
        name: "Enerrgy",
        kind: "sponsor",
        link: "#"
    },
    {
        name: "Mecânica Estrela",
        kind: "sponsor",
        link: "#"
    },
    {
        name: "Person 3D",
        kind: "sponsor",
        link: "#"
    },
    {
        name: "Vitória Pneus e Rodas",
        kind: "sponsor",
        link: "#"
    },
    {
        name: "Nando Mecânica",
        kind: "sponsor",
        link: "#"
    },
    {
        name: "Sicredi",
        kind: "sponsor",
        link: "#"
    },
    {
        name: "Sindirepa",
        kind: "sponsor",
        link: "#"
    }
];
const impactCards = [
    {
        id: "social",
        title: L("Impacto Social — Acelera STEAM", "Social Impact — Acelera STEAM"),
        summary: L("Tornar a pesquisa científica mais acessível para estudantes de escolas públicas.", "Make scientific research more accessible to public school students."),
        details: [
            L("Projeto: Acelera STEAM.", "Project: Acelera STEAM."),
            L("Missão: tornar a pesquisa científica mais acessível a estudantes de escolas públicas por meio de mentoria, orientação técnica e apoio financeiro.", "Mission: Make scientific research more accessible to public school students through mentoring, technical guidance, and financial support."),
            L("Atividades: mentoria em pesquisa, desenvolvimento de projetos, inscrição em competições, financiamento de banners, artigos, materiais e taxas de participação, além de apoio contínuo durante o desenvolvimento dos projetos e nas feiras de ciências.", "Activities: Research mentoring, project development, competition registration, funding for banners, articles, materials, and participation fees, plus continuous support throughout project development and science fairs.")
        ],
        stat: "3º",
        statTitle: L("Nossa conquista", "Our Achievement"),
        statText: L("Um projeto científico apoiado pelo Acelera STEAM conquistou o terceiro lugar em uma feira de ciências.", "A scientific project supported by Acelera STEAM earned third place at a science fair.")
    },
    {
        id: "sustain",
        title: L("Sustentabilidade — Vyperion Wear", "Sustainability — Vyperion Wear"),
        summary: L("Promover a moda sustentável, incentivando o reuso de roupas, a criatividade e o consumo responsável.", "Promote sustainable fashion by encouraging clothing reuse, creativity, and responsible consumption."),
        details: [
            L("Projeto: Vyperion Wear.", "Project: Vyperion Wear."),
            L("Missão: promover a moda sustentável, incentivando o reuso de roupas, a criatividade e o consumo responsável.", "Mission: Promote sustainable fashion by encouraging clothing reuse, creativity, and responsible consumption."),
            L("Atividades: oficinas interativas em que crianças do ensino fundamental customizam e transformam roupas sem uso em peças renovadas e personalizadas.", "Activities: Interactive workshops where elementary school children customize and transform unused clothing into renewed, personalized pieces."),
            L("Impacto: incentivar o reuso têxtil, reduzir o desperdício e despertar a consciência ambiental nos jovens participantes.", "Impact: Encouraging textile reuse, reducing waste, and raising environmental awareness among young participants.")
        ],
        stat: "20+",
        statTitle: L("Crianças participaram", "Children Participated"),
        statText: L("Oficinas práticas que promovem o reuso de roupas e o consumo sustentável.", "Hands-on workshops promoting clothing reuse and sustainable consumption.")
    }
];
var _c;
__turbopack_context__.k.register(_c, "L");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/images.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Caminhos das imagens (dentro de public/images). Se o arquivo não existir, aparece o espaço reservado.
// Se o nome do SEU arquivo for diferente, mude o caminho aqui.
__turbopack_context__.s([
    "images",
    ()=>images,
    "partnerLogos",
    ()=>partnerLogos,
    "teamPhotos",
    ()=>teamPhotos
]);
const images = {
    logo: "/images/logo.png",
    car: "/images/carro.png",
    stemLogo: "/images/stem-racing.png",
    qr: "/images/qr.png",
    teamPhoto: "/images/foto-do-time.png"
};
const teamPhotos = {
    "Alexandra Rodriguez": "/images/equipe/alexandra.jpg",
    "Nicolle Tebaldi": "/images/equipe/nicolle.jpg",
    "Nicoly de Lara": "/images/equipe/nicoly.jpg",
    "Lucas Sousa": "/images/equipe/lucas.jpg",
    "Hilary de Oliveira": "/images/equipe/hilary.jpg",
    "João Stein": "/images/equipe/joao.jpg"
};
const partnerLogos = {
    "Colégio SESI": "/images/sesi-industria.png",
    "SENAI": "/images/parceiros/senai.jpeg",
    "Studio Sherpe": "/images/parceiros/studio-sherpe.png",
    "RM Usinagem": "/images/parceiros/rm-usinagem.png",
    "Rhaela Semijoias": "/images/parceiros/rhaela.png",
    "Imprecad Gráfica Rápida": "/images/parceiros/imprecad.png",
    "Boys Express": "/images/parceiros/boys-express.png",
    "Ceola Uniformes": "/images/parceiros/ceola.png",
    "Enerrgy": "/images/parceiros/enerrgy.png",
    "Mecânica Estrela": "/images/parceiros/mecanica-estrela.png",
    "Person 3D": "/images/parceiros/person3d.png",
    "Vitória Pneus e Rodas": "/images/parceiros/vitoria-pneus.jpeg",
    "Nando Mecânica": "/images/parceiros/nando.png",
    "Sicredi": "/images/parceiros/sicredi.jpeg",
    "Sindirepa": "/images/parceiros/sindirepa.jpeg"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_17xr40_l8ood0._.js.map