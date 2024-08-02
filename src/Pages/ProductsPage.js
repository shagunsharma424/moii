import { useEffect, useState } from "react"
import { Navigate, json, useNavigate } from "react-router-dom"
import Footer from "../CommonComponents/Footer"
import ProductDescriptionPage from "./ProductDescriptionPage"
import { Modal } from 'bootstrap'; 
import Accordion from 'react-bootstrap/Accordion';

export default function ProductsPage({setChangeColor,changeColor})
{

    const[modalWork,setModalWork]=useState("Title")
    const[designerTitle,setDesignerTitle]=useState()
    const items=[
            {
                "centraId": 86049,
                "pimId": 31467,
                "sku": null,
                "slug": "big-george-double-seater",
                "href": "/product/big-george-double-seater",
                "price": "€ 4,450.00",
                "priceBeforeDiscount": null,
                "hasFromLabel": true,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 91307,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Big George/Big George Sofa/Photography/Product Images/PNG/91307/image-thumb__91307__header_fullscreen_2x_jpg/Big_George_Double_Seater_Arda_201_Product-02.webp",
                    "alt": null,
                    "caption": null,
                    "width": 2880,
                    "height": 1439
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 31467,
                    "dimension2": "PBIGGDOUBI",
                    "dimension3": 86049,
                    "id": 86049,
                    "name": "Big George Double Seater - CAT 1",
                    "price": 4450,
                    "quantity": 1
                },
                "pimcoreId": 31467,
                "rootId": 31467,
                "title": "Big George Double Seater",
                "author": "Cristián Mohaded",
                "flag": "New",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 91307,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Big George/Big George Sofa/Photography/Product Images/PNG/91307/image-thumb__91307__trimmed/Big_George_Double_Seater_Arda_201_Product-02.webp",
                    "alt": null,
                    "caption": null,
                    "width": 900,
                    "height": 299
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 86058,
                "pimId": 31463,
                "sku": null,
                "slug": "big-george-armchair",
                "href": "/product/big-george-armchair",
                "price": "€ 3,953.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 85611,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Big George/Big George Armchair/Photography/Product Images/PNG/85611/image-thumb__85611__header_fullscreen_2x_jpg/Big_George_Armchair_Spectrum_Agave_Product-01.webp",
                    "alt": null,
                    "caption": null,
                    "width": 2880,
                    "height": 1440
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 31463,
                    "dimension2": "PBIGGARMCII",
                    "dimension3": 86058,
                    "id": 86058,
                    "name": "Big George Armchair - CAT II",
                    "price": 3953,
                    "quantity": 1
                },
                "pimcoreId": 31463,
                "rootId": 31463,
                "title": "Big George Armchair",
                "author": "Cristián Mohaded",
                "flag": "New",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 85611,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Big George/Big George Armchair/Photography/Product Images/PNG/85611/image-thumb__85611__trimmed/Big_George_Armchair_Spectrum_Agave_Product-01.webp",
                    "alt": null,
                    "caption": null,
                    "width": 900,
                    "height": 491
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 46737,
                "pimId": 31117,
                "sku": null,
                "slug": "kisss-lounge-chair",
                "href": "/product/kisss-lounge-chair",
                "price": "€ 2,750.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 83947,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Kisss Lounge Chair/Photography/Product Images/Single Chair - Diving-3-623/PNG/83947/image-thumb__83947__header_fullscreen_2x_jpg/Kisss-Chair-Divina-3-623_Product-SingleChair-1.webp",
                    "alt": null,
                    "caption": null,
                    "width": 1107,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "collection",
                    "dimension1": 31117,
                    "dimension2": "PKISSARMCIV",
                    "dimension3": 46737,
                    "id": 46737,
                    "name": "Kisss Lounge Chair - CAT IV",
                    "price": 2750,
                    "quantity": 1
                },
                "pimcoreId": 31117,
                "rootId": 31117,
                "title": "Kisss Lounge Chair",
                "author": "Marcel Wanders",
                "flag": "New",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 83947,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Kisss Lounge Chair/Photography/Product Images/Single Chair - Diving-3-623/PNG/83947/image-thumb__83947__trimmed/Kisss-Chair-Divina-3-623_Product-SingleChair-1.webp",
                    "alt": null,
                    "caption": null,
                    "width": 900,
                    "height": 749
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 31548,
                "pimId": 24994,
                "sku": null,
                "slug": "hana-chairs-un-upholstered-set-of-2",
                "href": "/product/hana-chairs-un-upholstered-set-of-2",
                "price": "€ 609.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 17,
                "image": {
                    "pimcoreId": 71844,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Hana Chair Dining/Un-Upholstered/Terracotta/Photography/Png - Transparent/71844/image-thumb__71844__header_fullscreen_2x_jpg/TERRACOTA-HANA-CHAIR-BLACK_LEGS-FRONT.webp",
                    "alt": null,
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "collection",
                    "dimension1": 24994,
                    "dimension2": "8718282380278",
                    "dimension3": 31548,
                    "id": 31548,
                    "name": "Hana Chairs Un-Upholstered Set of 2 - Non-Stackable Black Legs, Black",
                    "price": 609,
                    "quantity": 1
                },
                "pimcoreId": 24994,
                "rootId": 24994,
                "title": "Hana Chairs Un-Upholstered Set of 2 ",
                "author": "Simone Bonanni",
                "flag": "New",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 71844,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Hana Chair Dining/Un-Upholstered/Terracotta/Photography/Png - Transparent/71844/image-thumb__71844__trimmed/TERRACOTA-HANA-CHAIR-BLACK_LEGS-FRONT.webp",
                    "alt": null,
                    "caption": null,
                    "width": 900,
                    "height": 1354
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": {
                    "pimcoreId": 74129,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Hana Chair Dining/Applied Images/Photography/Amsterdam_Living_Spaces/Un-Upholstered/74129/image-thumb__74129__header_fullscreen_2x_jpg/Hana-Chair-Applied-Amsterdam-Locations5.webp",
                    "alt": null,
                    "caption": null,
                    "width": 983,
                    "height": 1476,
                    "partialInteractiveDots": [
                        {
                            "top": 64.61318051575931,
                            "left": 66.45161290322581,
                            "pimcoreId": "25164"
                        },
                        {
                            "top": 44.84240687679083,
                            "left": 68.81720430107526,
                            "pimcoreId": "4899"
                        },
                        {
                            "top": 90.40114613180516,
                            "left": 85.3763440860215,
                            "pimcoreId": "8822"
                        }
                    ]
                },
                "isHero": true
            },
            {
                "centraId": 31650,
                "pimId": 22854,
                "sku": null,
                "slug": "knitty-lounge-chair",
                "href": "/product/knitty-lounge-chair",
                "price": "€ 6,695.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 67784,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Knitty Lounge Chair/67784/image-thumb__67784__header_fullscreen_2x_jpg/Knitty-Lounge-Chair-front-angle-Mosaic-2-0222 background.webp",
                    "alt": null,
                    "caption": null,
                    "width": 653,
                    "height": 600
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 22854,
                    "dimension2": "8718282773995",
                    "dimension3": 31650,
                    "id": 31650,
                    "name": "Knitty Lounge Chair - Blossom Camel",
                    "price": 6695,
                    "quantity": 1
                },
                "pimcoreId": 22854,
                "rootId": 22854,
                "title": "Knitty Lounge Chair",
                "author": "Nika Zupanc",
                "flag": "New",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 67784,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Knitty Lounge Chair/67784/image-thumb__67784__trimmed/Knitty-Lounge-Chair-front-angle-Mosaic-2-0222 background.webp",
                    "alt": null,
                    "caption": null,
                    "width": 556,
                    "height": 378
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 31605,
                "pimId": 24324,
                "sku": null,
                "slug": "hana-chair-upholstered",
                "href": "/product/hana-chair-upholstered",
                "price": "€ 808.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 73529,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Hana Chair Dining/Upholstered/Photography/PNG/73529/image-thumb__73529__header_fullscreen_2x_jpg/Hana-Chair-Upholstered-product-32.webp",
                    "alt": null,
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "collection",
                    "dimension1": 24324,
                    "dimension2": "PHANADINI01II",
                    "dimension3": 31605,
                    "id": 31605,
                    "name": "Hana Chair Upholstered - Non-Stackable Black Legs, CAT II",
                    "price": 808,
                    "quantity": 1
                },
                "pimcoreId": 24324,
                "rootId": 24324,
                "title": "Hana Chair Upholstered",
                "author": "Simone Bonanni",
                "flag": "New",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 73529,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Hana Chair Dining/Upholstered/Photography/PNG/73529/image-thumb__73529__trimmed/Hana-Chair-Upholstered-product-32.webp",
                    "alt": null,
                    "caption": null,
                    "width": 900,
                    "height": 1386
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 31532,
                "pimId": 25319,
                "sku": null,
                "slug": "aldora-vis-a-vis",
                "href": "/product/aldora-vis-a-vis",
                "price": "€ 3,605.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 75276,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Aldora/Aldora Vis a Vis/Product Photography/75276/image-thumb__75276__header_fullscreen_2x_jpg/Aldora_Vis_a_Vis_Leather_Front_Left.webp",
                    "alt": null,
                    "caption": null,
                    "width": 2213,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 25319,
                    "dimension2": "PALDOVI01I",
                    "dimension3": 31532,
                    "id": 31532,
                    "name": "Aldora Vis a Vis - Left, CAT 1",
                    "price": 3605,
                    "quantity": 1
                },
                "pimcoreId": 25319,
                "rootId": 25319,
                "title": "Aldora Vis a Vis",
                "author": "Cristina Celestino ",
                "flag": "New",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 75276,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Aldora/Aldora Vis a Vis/Product Photography/75276/image-thumb__75276__trimmed/Aldora_Vis_a_Vis_Leather_Front_Left.webp",
                    "alt": null,
                    "caption": null,
                    "width": 900,
                    "height": 376
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 34477,
                "pimId": 15729,
                "sku": null,
                "slug": "no-screw-no-glue-buffet",
                "href": "/product/no-screw-no-glue-buffet",
                "price": "€ 4,454.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 1,
                "image": {
                    "pimcoreId": 37684,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/No Screw No Glue/No Screw No Glue Buffet/37684/image-thumb__37684__header_fullscreen_2x_jpg/No-Screw-No-Glue-Buffet.webp",
                    "alt": "No Screw No Glue Buffet front view",
                    "caption": null,
                    "width": 2880,
                    "height": 1440
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "storage",
                    "dimension1": 15729,
                    "dimension2": "8718282363493",
                    "dimension3": 34477,
                    "id": 34477,
                    "name": "No Screw No Glue Buffet",
                    "price": 4454,
                    "quantity": 1
                },
                "pimcoreId": 15729,
                "rootId": 15729,
                "title": "No Screw No Glue Buffet",
                "author": "Joost van Bleiswijk",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 37684,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/No Screw No Glue/No Screw No Glue Buffet/37684/image-thumb__37684__trimmed/No-Screw-No-Glue-Buffet.webp",
                    "alt": "No Screw No Glue Buffet front view",
                    "caption": null,
                    "width": 900,
                    "height": 398
                },
                "mobilePartsImages": [
                    {
                        "pimcoreId": 37889,
                        "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/No Screw No Glue/No Screw No Glue Buffet/37889/image-thumb__37889__header_fullscreen_2x_jpg/No-Screw-No-Glue-Buffet-Mobile-parts-01.webp",
                        "alt": "No Screw No Glue Buffet front view",
                        "caption": null,
                        "width": 2880,
                        "height": 1440
                    },
                    {
                        "pimcoreId": 37899,
                        "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/No Screw No Glue/No Screw No Glue Buffet/37899/image-thumb__37899__header_fullscreen_2x_jpg/No-Screw-No-Glue-Buffet-Mobile-parts-04.webp",
                        "alt": "No Screw No Glue Buffet front view opening doors 4",
                        "caption": null,
                        "width": 2880,
                        "height": 1440
                    }
                ],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 34478,
                "pimId": 15964,
                "sku": null,
                "slug": "no-screw-no-glue-cabinet",
                "href": "/product/no-screw-no-glue-cabinet",
                "price": "€ 5,643.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 7,
                "image": {
                    "pimcoreId": 40213,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/No Screw No Glue/No Screw No Glue Cabinet/40213/image-thumb__40213__header_fullscreen_2x_jpg/No-Screw-No-Glue-Cabinet-Front.webp",
                    "alt": "No Screw No Glue Cabinet front side",
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "storage",
                    "dimension1": 15964,
                    "dimension2": "8718282363486",
                    "dimension3": 34478,
                    "id": 34478,
                    "name": "No Screw No Glue Cabinet",
                    "price": 5643,
                    "quantity": 1
                },
                "pimcoreId": 15964,
                "rootId": 15964,
                "title": "No Screw No Glue Cabinet",
                "author": "Joost van Bleiswijk",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 40213,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/No Screw No Glue/No Screw No Glue Cabinet/40213/image-thumb__40213__trimmed/No-Screw-No-Glue-Cabinet-Front.webp",
                    "alt": "No Screw No Glue Cabinet front side",
                    "caption": null,
                    "width": 900,
                    "height": 1698
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 34467,
                "pimId": 16164,
                "sku": null,
                "slug": "container-table-classic",
                "href": "/product/container-table-classic",
                "price": "€ 1,845.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 39064,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Container/Container NEW/Container Table Classic/39064/image-thumb__39064__header_fullscreen_2x_jpg/Container-Table-Classic-Black.webp",
                    "alt": "Container Table round black",
                    "caption": null,
                    "width": 2880,
                    "height": 1440
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "tables",
                    "dimension1": 16164,
                    "dimension2": "",
                    "dimension3": 34467,
                    "id": 34467,
                    "name": "Container Table Classic - Black",
                    "price": 1845,
                    "quantity": 1
                },
                "pimcoreId": 16164,
                "rootId": 16164,
                "title": "Container Table Classic",
                "author": "Marcel Wanders",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 39064,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Container/Container NEW/Container Table Classic/39064/image-thumb__39064__trimmed/Container-Table-Classic-Black.webp",
                    "alt": "Container Table round black",
                    "caption": null,
                    "width": 900,
                    "height": 548
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 34920,
                "pimId": 1615,
                "sku": null,
                "slug": "smoke-armchair",
                "href": "/product/smoke-armchair",
                "price": "€ 5,639.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 13,
                "image": {
                    "pimcoreId": 13028,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Smoke Series/Smoke Armchair/13028/image-thumb__13028__header_fullscreen_2x_jpg/Smoke-Armchair-Transparent.webp",
                    "alt": "Smoke Armchair front side",
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 1615,
                    "dimension2": "8718282338965",
                    "dimension3": 34920,
                    "id": 34920,
                    "name": "Smoke Armchair",
                    "price": 5639,
                    "quantity": 1
                },
                "pimcoreId": 1615,
                "rootId": 1615,
                "title": "Smoke Armchair",
                "author": "Maarten Baas",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 13028,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Smoke Series/Smoke Armchair/13028/image-thumb__13028__trimmed/Smoke-Armchair-Transparent.webp",
                    "alt": "Smoke Armchair front side",
                    "caption": null,
                    "width": 900,
                    "height": 1139
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 36513,
                "pimId": 1621,
                "sku": null,
                "slug": "smoke-dining-chair",
                "href": "/product/smoke-dining-chair",
                "price": "€ 2,241.00",
                "priceBeforeDiscount": null,
                "hasFromLabel": true,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 7,
                "image": {
                    "pimcoreId": 950,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Smoke Series/Smoke Dining chair/950/image-thumb__950__header_fullscreen_2x_jpg/smokedining-s-transparent.webp",
                    "alt": "Smoke Dining Chair front side",
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "collection",
                    "dimension1": 1621,
                    "dimension2": "8718282338958",
                    "dimension3": 36513,
                    "id": 36513,
                    "name": "Smoke Dining Chair - Armchair, Black",
                    "price": 3047,
                    "quantity": 1
                },
                "pimcoreId": 1621,
                "rootId": 1621,
                "title": "Smoke Dining Chair",
                "author": "Maarten Baas",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 950,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Smoke Series/Smoke Dining chair/950/image-thumb__950__trimmed/smokedining-s-transparent.webp",
                    "alt": "Smoke Dining Chair front side",
                    "caption": null,
                    "width": 900,
                    "height": 1794
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 31903,
                "pimId": 18333,
                "sku": null,
                "slug": "aldora-chaise-longue",
                "href": "/product/aldora-chaise-longue",
                "price": "€ 2,987.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 75521,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Aldora/Aldora Chaise Longue/Product Photography (old)/75521/image-thumb__75521__header_fullscreen_2x_jpg/Aldora_sofa_chaise_longue_left_palette_product_front.webp",
                    "alt": null,
                    "caption": null,
                    "width": 2213,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 18333,
                    "dimension2": "PALDOCL01I",
                    "dimension3": 31903,
                    "id": 31903,
                    "name": "Aldora Chaise Longue - Left, CAT 1",
                    "price": 2987,
                    "quantity": 1
                },
                "pimcoreId": 18333,
                "rootId": 18333,
                "title": "Aldora Chaise Longue",
                "author": "Cristina Celestino ",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 75521,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Aldora/Aldora Chaise Longue/Product Photography (old)/75521/image-thumb__75521__trimmed/Aldora_sofa_chaise_longue_left_palette_product_front.webp",
                    "alt": null,
                    "caption": null,
                    "width": 900,
                    "height": 448
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 31926,
                "pimId": 18308,
                "sku": null,
                "slug": "aldora-sofa",
                "href": "/product/aldora-sofa",
                "price": "€ 3,605.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 75226,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Aldora/Aldora Sofa/Product Photography/75226/image-thumb__75226__header_fullscreen_2x_jpg/Aldora_Sofa_DODO_Front.webp",
                    "alt": null,
                    "caption": null,
                    "width": 2213,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "collection",
                    "dimension1": 18308,
                    "dimension2": "PALDODOUBI",
                    "dimension3": 31926,
                    "id": 31926,
                    "name": "Aldora Sofa - CAT 1",
                    "price": 3605,
                    "quantity": 1
                },
                "pimcoreId": 18308,
                "rootId": 18308,
                "title": "Aldora Sofa",
                "author": "Cristina Celestino ",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 75226,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Aldora/Aldora Sofa/Product Photography/75226/image-thumb__75226__trimmed/Aldora_Sofa_DODO_Front.webp",
                    "alt": null,
                    "caption": null,
                    "width": 900,
                    "height": 491
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": {
                    "pimcoreId": 56948,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Applied/Fairs-events/Milan/2022/Divine-Dreams/image-thumb__56948__header_fullscreen_2x_jpg/Divine-Dreams-Milan-2022.webp",
                    "alt": "Aldora sofa and Serpentine light with Memento Moooi Wallcovering at Salone del Mobile Milan 2022",
                    "caption": null,
                    "width": 1117,
                    "height": 1476,
                    "partialInteractiveDots": [
                        {
                            "top": 79.22636103151862,
                            "left": 67.99242424242425,
                            "pimcoreId": "18308"
                        },
                        {
                            "top": 36.10315186246418,
                            "left": 38.63636363636363,
                            "pimcoreId": "18223"
                        },
                        {
                            "top": 49.4269340974212,
                            "left": 56.06060606060606,
                            "pimcoreId": "21143"
                        },
                        {
                            "top": 92.83667621776505,
                            "left": 13.068181818181818,
                            "pimcoreId": "17613"
                        },
                        {
                            "top": 41.977077363896846,
                            "left": 71.96969696969697,
                            "pimcoreId": "1561"
                        },
                        {
                            "top": 46.561604584527224,
                            "left": 33.333333333333336,
                            "pimcoreId": "8651"
                        }
                    ]
                },
                "isHero": true
            },
            {
                "centraId": 34965,
                "pimId": 1141,
                "sku": null,
                "slug": "amami",
                "href": "/product/amami",
                "price": "€ 12,161.00",
                "priceBeforeDiscount": null,
                "hasFromLabel": true,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 1285,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Amami/Amami Sofa/1285/image-thumb__1285__header_fullscreen_2x_jpg/Amami-Sofa-Brown.webp",
                    "alt": "Amami Sofa dark grey front view",
                    "caption": null,
                    "width": 2880,
                    "height": 1440
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 1141,
                    "dimension2": "8718282343686",
                    "dimension3": 34965,
                    "id": 34965,
                    "name": "Amami - Blue",
                    "price": 12161,
                    "quantity": 1
                },
                "pimcoreId": 1141,
                "rootId": 1141,
                "title": "Amami",
                "author": "Lorenza Bozzoli",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 1285,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Amami/Amami Sofa/1285/image-thumb__1285__trimmed/Amami-Sofa-Brown.webp",
                    "alt": "Amami Sofa dark grey front view",
                    "caption": null,
                    "width": 900,
                    "height": 325
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 34968,
                "pimId": 1150,
                "sku": null,
                "slug": "bart-armchair",
                "href": "/product/bart-armchair",
                "price": "€ 4,204.00",
                "priceBeforeDiscount": null,
                "hasFromLabel": true,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 37404,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Bart/Bart Swivel/37404/image-thumb__37404__header_fullscreen_2x_jpg/Bart-Swivel-Blushing-Sloth-Wooly.webp",
                    "alt": "Bart Armchair Swivel Blushing Sloth wooly fabric",
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 1150,
                    "dimension2": "PBARTARMCI",
                    "dimension3": 34968,
                    "id": 34968,
                    "name": "Bart Armchair - Basic, CAT 1",
                    "price": 4204,
                    "quantity": 1
                },
                "pimcoreId": 1150,
                "rootId": 1150,
                "title": "Bart Armchair",
                "author": "Moooi",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 37404,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Bart/Bart Swivel/37404/image-thumb__37404__trimmed/Bart-Swivel-Blushing-Sloth-Wooly.webp",
                    "alt": "Bart Armchair Swivel Blushing Sloth wooly fabric",
                    "caption": null,
                    "width": 900,
                    "height": 727
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 35100,
                "pimId": 1213,
                "sku": null,
                "slug": "carbon-bar-stool",
                "href": "/product/carbon-bar-stool",
                "price": "€ 1,129.00",
                "priceBeforeDiscount": null,
                "hasFromLabel": true,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 75,
                "image": {
                    "pimcoreId": 1484,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Carbon/Carbon Barstool/Carbon Barstool Low/1484/image-thumb__1484__header_fullscreen_2x_jpg/Carbon-Bar-Stool-Black-Front.webp",
                    "alt": "Carbon Bar Stool Low front side",
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 1213,
                    "dimension2": "8718282340166",
                    "dimension3": 35100,
                    "id": 35100,
                    "name": "Carbon Bar Stool - High, Black",
                    "price": 1233,
                    "quantity": 1
                },
                "pimcoreId": 1213,
                "rootId": 1213,
                "title": "Carbon Bar Stool",
                "author": "Bertjan Pot",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 1484,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Carbon/Carbon Barstool/Carbon Barstool Low/1484/image-thumb__1484__trimmed/Carbon-Bar-Stool-Black-Front.webp",
                    "alt": "Carbon Bar Stool Low front side",
                    "caption": null,
                    "width": 900,
                    "height": 1508
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 34891,
                "pimId": 1228,
                "sku": null,
                "slug": "charleston-sofa",
                "href": "/product/charleston-sofa",
                "price": "€ 13,650.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 7,
                "image": {
                    "src": "https://moooi.centracdn.net/client/dynamic/images/1093_200ed48666.jpg"
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 1228,
                    "dimension2": "8718282343716",
                    "dimension3": 34891,
                    "id": 34891,
                    "name": "Charleston Sofa",
                    "price": 13650,
                    "quantity": 1
                },
                "pimcoreId": 1228,
                "rootId": 1228,
                "title": "Charleston Sofa",
                "author": "Marcel Wanders",
                "flag": "",
                "isReleased": true,
                "trimmedImage": null,
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 34892,
                "pimId": 1234,
                "sku": null,
                "slug": "chess-table",
                "href": "/product/chess-table",
                "price": "€ 1,248.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 85,
                "image": {
                    "pimcoreId": 1501,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Chess Table/1501/image-thumb__1501__header_fullscreen_2x_jpg/chess-table.webp",
                    "alt": "Chess Table front view",
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "tables",
                    "dimension1": 1234,
                    "dimension2": "8718282338033",
                    "dimension3": 34892,
                    "id": 34892,
                    "name": "Chess Table",
                    "price": 1248,
                    "quantity": 1
                },
                "pimcoreId": 1234,
                "rootId": 1234,
                "title": "Chess Table",
                "author": "Front",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 1501,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Chess Table/1501/image-thumb__1501__trimmed/chess-table.webp",
                    "alt": "Chess Table front view",
                    "caption": null,
                    "width": 900,
                    "height": 1021
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 35135,
                "pimId": 1243,
                "sku": null,
                "slug": "cloud-sofa",
                "href": "/product/cloud-sofa",
                "price": "€ 7,549.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 16663,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Cloud Sofa/Cloud Sofa/16663/image-thumb__16663__header_fullscreen_2x_jpg/clouds_velourgreen1.webp",
                    "alt": "Cloud Sofa Velour green front side",
                    "caption": null,
                    "width": 2214,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "collection",
                    "dimension1": 1243,
                    "dimension2": "PCLOUSOFAI",
                    "dimension3": 35135,
                    "id": 35135,
                    "name": "Cloud Sofa - CAT 1",
                    "price": 7549,
                    "quantity": 1
                },
                "pimcoreId": 1243,
                "rootId": 1243,
                "title": "Cloud Sofa",
                "author": "Marcel Wanders",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 16663,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Cloud Sofa/Cloud Sofa/16663/image-thumb__16663__trimmed/clouds_velourgreen1.webp",
                    "alt": "Cloud Sofa Velour green front side",
                    "caption": null,
                    "width": 900,
                    "height": 600
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 35154,
                "pimId": 1249,
                "sku": null,
                "slug": "common-comrades",
                "href": "/product/common-comrades",
                "price": "€ 515.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 5,
                "image": {
                    "pimcoreId": 1534,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Common Comrades/1534/image-thumb__1534__header_fullscreen_2x_jpg/common-comrades-all-6.webp",
                    "alt": "Common Comrades side table family all six tables",
                    "caption": null,
                    "width": 2880,
                    "height": 1440
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "tables",
                    "dimension1": 1249,
                    "dimension2": "8718282338118",
                    "dimension3": 35154,
                    "id": 35154,
                    "name": "Common Comrades - Emperor, Red RAL 3003",
                    "price": 515,
                    "quantity": 1
                },
                "pimcoreId": 1249,
                "rootId": 1249,
                "title": "Common Comrades",
                "author": "Neri and Hu",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 1534,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Common Comrades/1534/image-thumb__1534__trimmed/common-comrades-all-6.webp",
                    "alt": "Common Comrades side table family all six tables",
                    "caption": null,
                    "width": 900,
                    "height": 123
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 35160,
                "pimId": 1258,
                "sku": null,
                "slug": "container-stool",
                "href": "/product/container-stool",
                "price": "€ 288.00",
                "priceBeforeDiscount": null,
                "hasFromLabel": true,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 24,
                "image": {
                    "pimcoreId": 61343,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Container/Container Stool/61343/image-thumb__61343__header_fullscreen_2x_jpg/Container-Stools.webp",
                    "alt": null,
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 1258,
                    "dimension2": "8718282334516",
                    "dimension3": 35160,
                    "id": 35160,
                    "name": "Container Stool - Stool, Black",
                    "price": 288,
                    "quantity": 1
                },
                "pimcoreId": 1258,
                "rootId": 1258,
                "title": "Container Stool",
                "author": "Marcel Wanders",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 61343,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Container/Container Stool/61343/image-thumb__61343__trimmed/Container-Stools.webp",
                    "alt": null,
                    "caption": null,
                    "width": 900,
                    "height": 936
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 34603,
                "pimId": 1318,
                "sku": null,
                "slug": "hana-armchair",
                "href": "/product/hana-armchair",
                "price": "€ 3,411.00",
                "priceBeforeDiscount": null,
                "hasFromLabel": true,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 37399,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Hana/Hana Armchair Wingback/37399/image-thumb__37399__header_fullscreen_2x_jpg/Hana-Wingback-Menagerie-of-Extinct-Animals.webp",
                    "alt": "Hana Armchair Wingback Menagerie of Extinct Animals fabric",
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "collection",
                    "dimension1": 1318,
                    "dimension2": "PHANAARMCI",
                    "dimension3": 34603,
                    "id": 34603,
                    "name": "Hana Armchair - Armchair, CAT 1",
                    "price": 4047,
                    "quantity": 1
                },
                "pimcoreId": 1318,
                "rootId": 1318,
                "title": "Hana Armchair",
                "author": "Simone Bonanni",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 37399,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Hana/Hana Armchair Wingback/37399/image-thumb__37399__trimmed/Hana-Wingback-Menagerie-of-Extinct-Animals.webp",
                    "alt": "Hana Armchair Wingback Menagerie of Extinct Animals fabric",
                    "caption": null,
                    "width": 900,
                    "height": 991
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": {
                    "title": "",
                    "sources": [
                        {
                            "src": "https://cdn.moooi.com/assets/Collection/Hana/Content%20audio%20and%20video/Moooi_Hana_Campaign_Animation_2019.mp4",
                            "type": "video/mp4"
                        }
                    ]
                },
                "detailImage": null,
                "interactiveImage": null,
                "isHero": true
            },
            {
                "centraId": 34895,
                "pimId": 1342,
                "sku": null,
                "slug": "liberty-lounger",
                "href": "/product/liberty-lounger",
                "price": "€ 8,575.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 1,
                "image": {
                    "pimcoreId": 1652,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Liberty/Liberty Lounger/1652/image-thumb__1652__header_fullscreen_2x_jpg/Liberty-Lounger-1.webp",
                    "alt": "Liberty Lounger armchair right side",
                    "caption": null,
                    "width": 2880,
                    "height": 1440
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 1342,
                    "dimension2": "8718282343723",
                    "dimension3": 34895,
                    "id": 34895,
                    "name": "Liberty Lounger",
                    "price": 8575,
                    "quantity": 1
                },
                "pimcoreId": 1342,
                "rootId": 1342,
                "title": "Liberty Lounger",
                "author": "Atelier Van Lieshout",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 1652,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Liberty/Liberty Lounger/1652/image-thumb__1652__trimmed/Liberty-Lounger-1.webp",
                    "alt": "Liberty Lounger armchair right side",
                    "caption": null,
                    "width": 900,
                    "height": 472
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 34896,
                "pimId": 1345,
                "sku": null,
                "slug": "liberty-table",
                "href": "/product/liberty-table",
                "price": "€ 11,143.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 1,
                "image": {
                    "pimcoreId": 1654,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Liberty/Liberty Table/1654/image-thumb__1654__header_fullscreen_2x_jpg/Liberty-Table-by-Joep-van-Lieshout-1.webp",
                    "alt": "Liberty Table front side",
                    "caption": null,
                    "width": 2880,
                    "height": 1440
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "tables",
                    "dimension1": 1345,
                    "dimension2": "8718282198910",
                    "dimension3": 34896,
                    "id": 34896,
                    "name": "Liberty Table",
                    "price": 11143,
                    "quantity": 1
                },
                "pimcoreId": 1345,
                "rootId": 1345,
                "title": "Liberty Table",
                "author": "Atelier Van Lieshout",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 1654,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Liberty/Liberty Table/1654/image-thumb__1654__trimmed/Liberty-Table-by-Joep-van-Lieshout-1.webp",
                    "alt": "Liberty Table front side",
                    "caption": null,
                    "width": 900,
                    "height": 276
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 35254,
                "pimId": 1360,
                "sku": null,
                "slug": "love-sofa",
                "href": "/product/love-sofa",
                "price": "€ 4,294.00",
                "priceBeforeDiscount": null,
                "hasFromLabel": true,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 1674,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Love/Love Sofa Highback/1674/image-thumb__1674__header_fullscreen_2x_jpg/Love-sofa-highback-2017feb-1.webp",
                    "alt": "Love Sofa Highback grey front side",
                    "caption": null,
                    "width": 2880,
                    "height": 1440
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "collection",
                    "dimension1": 1360,
                    "dimension2": "PLOVESOFAII",
                    "dimension3": 35254,
                    "id": 35254,
                    "name": "Love Sofa - Sofa, CAT II",
                    "price": 4294,
                    "quantity": 1
                },
                "pimcoreId": 1360,
                "rootId": 1360,
                "title": "Love Sofa",
                "author": "Marcel Wanders",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 1674,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Love/Love Sofa Highback/1674/image-thumb__1674__trimmed/Love-sofa-highback-2017feb-1.webp",
                    "alt": "Love Sofa Highback grey front side",
                    "caption": null,
                    "width": 900,
                    "height": 765
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 35268,
                "pimId": 1363,
                "sku": null,
                "slug": "monster-barstool",
                "href": "/product/monster-barstool",
                "price": "€ 1,537.00",
                "priceBeforeDiscount": null,
                "hasFromLabel": true,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 27,
                "image": {
                    "pimcoreId": 1717,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Monster/Monster Barstool/1717/image-thumb__1717__header_fullscreen_2x_jpg/monster-barstool-front.webp",
                    "alt": "Monster Bar Stool black front side",
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 1363,
                    "dimension2": "8718282338699",
                    "dimension3": 35268,
                    "id": 35268,
                    "name": "Monster Barstool - Diamond Low, Black",
                    "price": 2047,
                    "quantity": 1
                },
                "pimcoreId": 1363,
                "rootId": 1363,
                "title": "Monster Barstool",
                "author": "Marcel Wanders",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 1717,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Monster/Monster Barstool/1717/image-thumb__1717__trimmed/monster-barstool-front.webp",
                    "alt": "Monster Bar Stool black front side",
                    "caption": null,
                    "width": 900,
                    "height": 1618
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 35304,
                "pimId": 1366,
                "sku": null,
                "slug": "monster-chair",
                "href": "/product/monster-chair",
                "price": "€ 1,146.00",
                "priceBeforeDiscount": null,
                "hasFromLabel": true,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 19,
                "image": {
                    "pimcoreId": 14616,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Monster/Monster Chair/14616/image-thumb__14616__header_fullscreen_2x_jpg/monster-chair-indigo-denim-with-arms.webp",
                    "alt": "Monster Armchair Indigo Denim blue front side",
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "collection",
                    "dimension1": 1366,
                    "dimension2": "8718282338712",
                    "dimension3": 35304,
                    "id": 35304,
                    "name": "Monster Chair - Diamond Arms, Black with Embroidery",
                    "price": 2495,
                    "quantity": 1
                },
                "pimcoreId": 1366,
                "rootId": 1366,
                "title": "Monster Chair",
                "author": "Marcel Wanders",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 14616,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Monster/Monster Chair/14616/image-thumb__14616__trimmed/monster-chair-indigo-denim-with-arms.webp",
                    "alt": "Monster Armchair Indigo Denim blue front side",
                    "caption": null,
                    "width": 900,
                    "height": 1032
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 35355,
                "pimId": 1375,
                "sku": null,
                "slug": "container-bar-stool",
                "href": "/product/container-bar-stool",
                "price": "€ 403.00",
                "priceBeforeDiscount": null,
                "hasFromLabel": true,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 71,
                "image": {
                    "pimcoreId": 13179,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Container/Container Barstool New Antiques/13179/image-thumb__13179__header_fullscreen_2x_jpg/container-barstool-new-antiques-high-white.webp",
                    "alt": "Container Bar Stool New Antiques high white ",
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 1375,
                    "dimension2": "8718282334462",
                    "dimension3": 35355,
                    "id": 35355,
                    "name": "Container Bar Stool - High, Black",
                    "price": 422,
                    "quantity": 1
                },
                "pimcoreId": 1375,
                "rootId": 1375,
                "title": "Container Bar Stool",
                "author": "Marcel Wanders",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 13179,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Container/Container Barstool New Antiques/13179/image-thumb__13179__trimmed/container-barstool-new-antiques-high-white.webp",
                    "alt": "Container Bar Stool New Antiques high white ",
                    "caption": null,
                    "width": 900,
                    "height": 1969
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 35361,
                "pimId": 1378,
                "sku": null,
                "slug": "nut-dining-chair",
                "href": "/product/nut-dining-chair",
                "price": "€ 1,246.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 30199,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Nut/Nut Dining/30199/image-thumb__30199__header_fullscreen_2x_jpg/Nut-Dining-Chair-Red-Brown-grey-front.webp",
                    "alt": "Nut Dining Chair red brown front view",
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "collection",
                    "dimension1": 1378,
                    "dimension2": "PNUT-DINII",
                    "dimension3": 35361,
                    "id": 35361,
                    "name": "Nut Dining Chair - CAT 1",
                    "price": 1246,
                    "quantity": 1
                },
                "pimcoreId": 1378,
                "rootId": 1378,
                "title": "Nut Dining Chair",
                "author": "Marcel Wanders",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 30199,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Nut/Nut Dining/30199/image-thumb__30199__trimmed/Nut-Dining-Chair-Red-Brown-grey-front.webp",
                    "alt": "Nut Dining Chair red brown front view",
                    "caption": null,
                    "width": 900,
                    "height": 1344
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 35378,
                "pimId": 1384,
                "sku": null,
                "slug": "nut-lounge-chair",
                "href": "/product/nut-lounge-chair",
                "price": "€ 1,452.00",
                "priceBeforeDiscount": null,
                "isSale": false,
                "isInStock": false,
                "isStockItem": false,
                "isSoldout": false,
                "stockQuantity": null,
                "image": {
                    "pimcoreId": 30159,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Nut/Nut Lounge Chair/30159/image-thumb__30159__header_fullscreen_2x_jpg/Nut-Lounge-Chair-Spectrum-Agave-grey-front.webp",
                    "alt": "Nut Lounge Chair Spectrum agave grey front view",
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "collection",
                    "dimension1": 1384,
                    "dimension2": "PNUT-LOUNI",
                    "dimension3": 35378,
                    "id": 35378,
                    "name": "Nut Lounge Chair - CAT 1",
                    "price": 1452,
                    "quantity": 1
                },
                "pimcoreId": 1384,
                "rootId": 1384,
                "title": "Nut Lounge Chair",
                "author": "Marcel Wanders",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 30159,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Nut/Nut Lounge Chair/30159/image-thumb__30159__trimmed/Nut-Lounge-Chair-Spectrum-Agave-grey-front.webp",
                    "alt": "Nut Lounge Chair Spectrum agave grey front view",
                    "caption": null,
                    "width": 900,
                    "height": 920
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            },
            {
                "centraId": 35387,
                "pimId": 1387,
                "sku": null,
                "slug": "o",
                "href": "/product/o",
                "price": "€ 2,974.00",
                "priceBeforeDiscount": null,
                "hasFromLabel": true,
                "isSale": false,
                "isInStock": true,
                "isStockItem": true,
                "isSoldout": false,
                "stockQuantity": 7,
                "image": {
                    "pimcoreId": 16965,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/O/16965/image-thumb__16965__header_fullscreen_2x_jpg/O_front-view.webp",
                    "alt": "O. rocking chair front view",
                    "caption": null,
                    "width": 984,
                    "height": 1476
                },
                "trackingData": {
                    "brand": "Moooi",
                    "category": "seating",
                    "dimension1": 1387,
                    "dimension2": "8718282338873",
                    "dimension3": 35387,
                    "id": 35387,
                    "name": "O. - O., Concrete",
                    "price": 2974,
                    "quantity": 1
                },
                "pimcoreId": 1387,
                "rootId": 1387,
                "title": "O.",
                "author": "Marcel Wanders",
                "flag": "",
                "isReleased": true,
                "trimmedImage": {
                    "pimcoreId": 16965,
                    "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/O/16965/image-thumb__16965__trimmed/O_front-view.webp",
                    "alt": "O. rocking chair front view",
                    "caption": null,
                    "width": 900,
                    "height": 906
                },
                "mobilePartsImages": [],
                "draggableVideo": null,
                "draggableImage": null,
                "detailVideo": null,
                "detailImage": null,
                "interactiveImage": null,
                "isHero": false
            }
    
        ]
    const[ProductList,setProductList]=useState([])
    const[duplicateProductList,setduplicateProductList]=useState([])
    const[searchData,setsearchData]=useState([])
    const[activeLabel,setActioveLabel]=useState("furniture")
    const parseStringifyData=JSON?.stringify(items)
    const [gridView,setGridValue]=useState(4)
    useEffect(()=>{
        setProductList(items)
        setduplicateProductList(items)
        setChangeColor("text-dark")
    },[])
    const navigate=useNavigate()

    // console.log("parseStringifyData",parseStringifyData)
    const changeGridView=(e)=>{
        console.log('eeeee',e.target.value)
        setGridValue(e?.target?.value)
    }
    const buttonsLabel = [
        { label: "furniture"},
        { label: "Seating"},
        { label: "Storage"},
        { label: "Tables"}
      ];
      
      console.log("activeLabel",activeLabel)

      function filteristFunction(value)
      {
        if(value.toLowerCase()=="furniture"){setProductList(items)}
        else{
                const filterItem=items.filter((itemData)=>{
                        return itemData.trackingData.category==value.toLowerCase()
                
            })
            setProductList(filterItem)
            // console.log("filterItem",filterItem,value.toLowerCase())
        }
      
      }
      const openProductDescriptionPage=()=>{
        navigate("/productDescription")
      }
     

      const [DesignerArray,setDesignerArray]=useState([
        {name: "Nika Zupanc", value: "Designer0",selected:false},
        {name: "Cristina Celestino ",    value: "Designer1",selected:false},
        {name: "Marcel Wanders", value: "Designer2",selected:false},
      ])

      const [CategoryArray,setCatgeoryArray]=useState([
        {name: "seating", value: "seating",selected:false},
        {name: "collection ",    value: "collection",selected:false},
        {name: "storage", value: "storage",selected:false},
        {name: "tables", value: "tables",selected:false},
      ])

      const [avilibilityArray,setavilibilityArray]=useState([
        {name: "In Stock", value: "In Stock",selected:false},
       
      ])

      const selectDesignerFunction=(event)=>{
        const id=event.target.id
        const name=event.target.name
        console.log("sdsssd",id,"name",name)
        setsearchData((prev)=>{
            const result=prev?.find((item)=>item?.name?.toLowerCase()==name?.toLowerCase())
            if(!result)
            {return[...prev,{name:name,type:id}]}
            else
            {
                const filterNonSimilarData=prev?.filter((item)=>item?.name?.toLowerCase()!=name?.toLowerCase())
                return filterNonSimilarData 
            }
        }) //Final Array of multiple selections data
        if(id=="author")
        {
            const newDesignerArray= DesignerArray?.map((item)=>{
                if(item?.name?.toLowerCase()==name?.toLowerCase()) {
                    // console.log("newDesignerArray1",item)
                    item.selected=(item.selected==true?false:true)
                    return item
                }
                return item
            })
            // console.log("newDesignerArray",newDesignerArray)
            setDesignerArray(newDesignerArray)
            // console.log("selectDesignerFunctionvalue",id,"name",name)
            setDesignerTitle(name)
        }
        else if(id=="category")
        {
            const newDesignerArray= CategoryArray?.map((item)=>{
                if(item?.name?.toLowerCase()==name?.toLowerCase()) {
                    // console.log("newDesignerArray1",item)
                    item.selected=(item.selected==true?false:true)
                    return item
                }
                return item
            })
            // console.log("newDesignerArray",newDesignerArray)
            setCatgeoryArray(newDesignerArray)
        }
        else if(id=="isInStock")
            {
                const newDesignerArray= avilibilityArray?.map((item)=>{
                    if(item?.name?.toLowerCase()==name?.toLowerCase()) {
                        // console.log("newDesignerArray1",item)
                        item.selected=(item.selected==true?false:true)
                        return item
                    }
                    return item
                })
                // console.log("newDesignerArray",newDesignerArray)
                setavilibilityArray(newDesignerArray)
            }
     
      }

    useEffect(() => {
        if (searchData?.length === 0) {
            // If searchData is empty, return the original list
            setProductList(duplicateProductList);
            // console.log("searchData is empty, returning original list:", duplicateProductList);
            return;
        }
    
        if (duplicateProductList) {
            // console.log("searchData:", searchData);
            // console.log("duplicateProductList:", duplicateProductList);
    
            const hasAuthor = searchData.some(data => data.type === "author");
            const hasCategory = searchData.some(data => data.type === "category");
            const hasStockStatus = searchData.some(data => data.type === "isInStock");
    
            const filterProductListAccordingToSearchedData = duplicateProductList.filter((item) => {
                console.log("Processing item:", item);
    
                // Check for author match
                const authorMatch = searchData
                    .filter(data => data.type === "author")
                    .some(data => item.author?.toLowerCase() === data.name.toLowerCase());
    
                // Check for category match
                const categoryMatch = searchData
                    .filter(data => data.type === "category")
                    .some(data => item.trackingData?.category?.toLowerCase() === data.name.toLowerCase());
    
                // Check for inStock match
                const inStockMatch = searchData
                    .filter(data => data.type === "isInStock")
                    .some(data => item.isInStock == true);
    
                // Log the results of the match conditions for debugging
                // console.log("Author Match:", authorMatch);
                // console.log("Category Match:", categoryMatch);
                // console.log("InStock Match:", inStockMatch);
    
                // // Check if all criteria are met
                // console.log("dsdsdddsd")
                return (hasAuthor ? authorMatch : true) &&
                       (hasCategory ? categoryMatch : true) &&
                       (hasStockStatus ? inStockMatch : true);
            });
    
            setProductList(filterProductListAccordingToSearchedData);
            console.log("Filtered Product List:", filterProductListAccordingToSearchedData);
        }
    }, [searchData, duplicateProductList]);
    
    
    

      const CustomModal2=()=>{

        return(
            <div className="modal fade" id="productPageModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-backdrop="static">
            <div className="modal-dialog itemModalFullScreen" role="document">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <div className="d-flex justify-content-end"><button onClick={()=>{closeCustomModal2()}} className="closeButton"><img src="close.png"/></button></div>
                    <Accordion
                    //  defaultActiveKey="2" 
                    //  activeKey={`${(modalWork=="Images")?"2":(modalWork=="Dimensions")?"0":"1"}`}
                  
                     activeKey={modalWork === "Title" ? "0" : modalWork === "Category" ? "1" : modalWork === "Availibility"?"2":"3"}
                     flush className="productPageAccordion">
                       
                        <Accordion.Item eventKey="0">
                            <Accordion.Header onClick={()=>{setModalWork("Title")}}>Designer</Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex flex-wrap">
                                {DesignerArray.map(({name,value,selected})=>
                                    {return(
                                            <button 
                                                // className="filterButton2" 
                                                // filterButton2Selected
                                                className={`filterButton2 ${(selected)?"filterButton2Selected":""}`} 
                                                id="author"
                                                name={name}
                                                onClick={selectDesignerFunction}
                                                >{name}</button>
                                        )})
                                }
                                </div>
                               
                        
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header onClick={()=>{setModalWork("Category")}}>Category</Accordion.Header>
                            <Accordion.Body>
                            <div className="d-flex flex-wrap">
                                {CategoryArray.map(({name,value,selected})=>
                                    {return(
                                            <button 
                                                // className="filterButton2" 
                                                // filterButton2Selected
                                                className={`filterButton2 ${(selected)?"filterButton2Selected":""}`} 
                                                id="category"
                                                name={name}
                                                onClick={selectDesignerFunction}
                                                >{name}</button>
                                        )})
                                }
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header onClick={()=>{setModalWork("Availibility")}}>Availibility</Accordion.Header>
                            <Accordion.Body>
                            <div className="d-flex flex-wrap">
                                {avilibilityArray.map(({name,value,selected})=>
                                    {return(
                                            <button 
                                                // className="filterButton2" 
                                                // filterButton2Selected
                                                className={`filterButton2 ${(selected)?"filterButton2Selected":""}`} 
                                                id="isInStock"
                                                name={name}
                                                onClick={selectDesignerFunction}
                                                >{name}</button>
                                        )})
                                }
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* <Accordion.Item eventKey="3">
                            <Accordion.Header onClick={()=>{setModalWork("newItems")}}>New Items</Accordion.Header>
                            <Accordion.Body>
                                New
                            </Accordion.Body>
                        </Accordion.Item> */}
                        </Accordion>
                    </div> 
                </div>
            </div>
        </div>
        )
    }
    const openCustomModal2=()=>{
        const modal = new Modal(document.getElementById('productPageModal'))
        modal.show();
    }
    const closeCustomModal2=()=>{
        const modalElement = document.getElementById('productPageModal');
        const modal = Modal.getInstance(modalElement); // Get the modal instance
    
        if (modal) {
            modal.hide(); // Hide the modal if instance exists
        } else {
            alert("Modal instance not found"); // Handle if modal instance doesn't exist
        }
    }
    console.log("modalWork Productpage",modalWork)
    console.log("designerTitle",designerTitle)
    console.log("searchData",searchData)
    console.log("DesignerArray",DesignerArray)
    return(
        <>
        <div className="productDescriptionMainDiv mb-5 pb-5 fadeUpAnimation">
            <div className="row pageTitle m-0 p-0">
                <h1 className="text-uppercase" >{activeLabel}</h1>
                <p>"Our collection contains work from emerging talent and internationally recognized designers. Together, we create A Life Extraordinary."</p>
            </div>
            <div className="row m-0 mt-4 p-0 justify-content-center">
                <div className="btnGroup d-flex">
                    <button className="btn1 " onClick={()=>{setActioveLabel("furniture");filteristFunction("furniture")}}><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
                    {buttonsLabel.map((item,index)=>
                        <button className={` selecettionButtons btn-outline-dark btn ${(activeLabel==item.label)?"ChangeBackground ":" "}`} onClick={()=>{setActioveLabel(item.label);filteristFunction(item.label)}}>{item.label}</button>
                    )} 
                </div>
            </div>
            <div className="row p-5">
                <div className="col-11 p-0 m-0 filterButton">
                        <button className="shadow" onClick={()=>{openCustomModal2()}}><i class="fa fa-filter mr-2  " aria-hidden="true"></i>Filters</button>
                </div>
                <div className="col-1 p-0 m-0 gridView">
                        <button style={{cursor:"pointer"}}>Grid<input type="range"  min="3" max="7" value={gridView}  class="slider" id="myRange" 
                        onChange={changeGridView}
                        /></button>
                </div> 
            </div>

            <div className="row m-0 p-0 justify-content-center">
                {ProductList.map((data)=>{
                        return(
                            <div className={`col-xl-${gridView}  col-md-4 col-12 m-0 p-0 cursor-pointer productListedImage`} onClick={openProductDescriptionPage}>
                                {/* category:{`${data?.trackingData?.category}`} */}
                                <img src={`${data?.image?.src}`}/>
                                <p className="mb-1 manageFontSize19px">{`${data?.title}`} 
                                    <strong className="manageFOntSize15">By {`${data?.author}`} </strong> 
                                        <i className=" text-danger">{`${data.flag}`}</i> 
                                </p>
                                <p className="mb-0">{`From ${data.price}`}</p>
                                {data.isInStock?
                                (data.stockQuantity<5)
                                    ?<p className="text-danger mb-0">Only {data.stockQuantity} left in Stock</p>
                                        :<p className="text-success mb-0">In Stock</p>
                                    :<p className="text-success mb-0 text-danger">Out of Stock</p>}
                                {/* {data.stockQuantity} */}
                            </div>
                        )
                      
                    })
                }
           
                {/* <div className="col-4 m-0 p-0 border productListedImage">
                    <img src="https://cdn.moooi.com/tmp/image-thumbnails/Collection/Big George/Big George Armchair/Photography/Product Images/PNG/85611/image-thumb__85611__header_fullscreen_2x_jpg/Big_George_Armchair_Spectrum_Agave_Product-01.webp"/>
                    <p className="mb-1 manageFontSize19px">Big George Armchair 
                        <strong className="manageFOntSize15">By Cristián Mohaded</strong> 
                            <i className=" text-danger">*New</i> 
                    </p>
                    <p className="mb-0">From € 3,953.00</p>
                    <p className="text-danger mb-0">Only 1 left in Stock</p>
                    <p className="text-success mb-0">In Stock</p>
                </div> */}
            </div>
        </div>
        {CustomModal2()}
        <Footer/>
            
        </>
    )
}