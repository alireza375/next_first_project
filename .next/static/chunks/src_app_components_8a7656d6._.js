(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_components_8a7656d6._.js", {

"[project]/src/app/components/common/basicbar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const BasicBar = ({ title, description })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center xl:w-[55%] lg:w-[80%] w-[90%] mx-auto gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: " text-[24px] md:text-[48px] font-bold text-gray-900 font-openSans ",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/components/common/basicbar.js",
                lineNumber: 4,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[16px] md:text-lg text-center text-[#626671] font-openSans ",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/app/components/common/basicbar.js",
                lineNumber: 7,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/common/basicbar.js",
        lineNumber: 3,
        columnNumber: 9
    }, this);
};
_c = BasicBar;
const __TURBOPACK__default__export__ = BasicBar;
var _c;
__turbopack_context__.k.register(_c, "BasicBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/home/selectService.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$common$2f$basicbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/common/basicbar.js [app-client] (ecmascript)");
"use client";
;
;
;
const SelectService = ()=>{
    //   const swiperRef = useRef(null);
    //   const services = [
    //     {
    //       _id: "1",
    //       image: "/images/city1.jpg",
    //       price: 255000,
    //       title: "Seaside Serenity Hill House",
    //       address: "4330 Bell Shoals Rd",
    //       details: {
    //         beds: 7,
    //         baths: 4,
    //         area: "1200",
    //       },
    //     },
    //     {
    //       _id: "2",
    //       image: "/images/city2.jpg",
    //       price: 255000,
    //       title: "Urban Oasis Apartment",
    //       address: "2893 Lakeview Dr",
    //       details: {
    //         beds: 5,
    //         baths: 3,
    //         area: "950",
    //       },
    //     },
    //     {
    //       _id: "3",
    //       image: "/images/city3.jpg",
    //       price: 255000,
    //       title: "Mountain View Cabin",
    //       address: "8127 Sunset Blvd",
    //       details: {
    //         beds: 4,
    //         baths: 2,
    //         area: "1350",
    //       },
    //     },
    //      {
    //       _id: "4",
    //       image: "/images/city6.jpg",
    //       price: 255000,
    //       title: "Mountain View Cabin",
    //       address: "8127 Sunset Blvd",
    //       details: {
    //         beds: 4,
    //         baths: 2,
    //         area: "1350",
    //       },
    //     },
    //   ];
    //   const [filterData, setFilterData] = useState(properties);
    //   useEffect(() => {
    //     setFilterData(properties);
    //   }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$common$2f$basicbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Agent Provide service to help",
                    description: "Realtors offer expert assistance in navigating the real estate market, finding the right property within your budget. They also handle negotiations and paperwork, ensuring a smooth buying or selling process."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/home/selectService.jsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 md:mt-8 lg:mt-10"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/home/selectService.jsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/home/selectService.jsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/home/selectService.jsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
};
_c = SelectService;
const __TURBOPACK__default__export__ = SelectService;
var _c;
__turbopack_context__.k.register(_c, "SelectService");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_8a7656d6._.js.map