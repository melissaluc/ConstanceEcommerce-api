/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('product_inventory').del()
  await knex('product_inventory').insert([
    {
      product_uid: "8c1423bc-0b1a-41a8-b6a1-899d593aaf35", 
      product_name:"align_halter_tank",
      colour:"black",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "3ecb8ea2-994c-4f26-aa41-0fa307569ec9", 
      product_name:"focus_halter_tank",
      colour:"yellow",
      size:"os",
      materials:"70% polyester, 30% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "ab6268a0-bfc5-4143-ab33-4a37aecb9648", 
      product_name:"running_tank",
      colour:"green",
      size:"os",
      materials:"100% polyester",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "e9851633-0bbc-4921-97dd-20151d47086c", 
      product_name:"scooba_tank",
      colour:"pink",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "a511ac26-c4e0-4ea3-b516-41178c030304", 
      product_name:"speedy_halter_tank",
      colour:"grey",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "3636bc40-ce96-4fc0-8043-ac79e00c5f2a", 
      product_name:"poised_halter_tank",
      colour:"black",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "c6ea72fb-b5bd-4447-a07d-9d8961639bd4", 
      product_name:"bold_muscle_tank",
      colour:"yellow",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "499e562e-197f-4430-9582-3f172aaf5544", 
      product_name:"mesh_tank",
      colour:"green",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "3e95abab-dc8b-48c5-b128-8127e2d86c98", 
      product_name:"elevate_tank",
      colour:"pink",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "47eebc57-63e0-4adf-9740-35e9c70cce31", 
      product_name:"sculpt_tank",
      colour:"grey",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "0471e889-a5c0-4153-8372-43c60e3ca7a5", 
      product_name:"flow_halter_tank",
      colour:"black",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "aabaaba3-9625-4a70-ad3d-1040b47d5128", 
      product_name:"train_hoodie",
      colour:"yellow",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "53eb407a-73b0-4a5b-a518-b0db4ce13538", 
      product_name:"train_crew_neck",
      colour:"green",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "60f2fed6-f8f2-40a7-b205-b4f1836fe28a", 
      product_name:"moodie_hoodie",
      colour:"pink",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "2c00818e-42c7-448c-9fdf-c0295afff680", 
      product_name:"her_hoodie",
      colour:"grey",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "eb362137-1314-450a-87ea-151030949bf7", 
      product_name:"super_crew_neck",
      colour:"black",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "c03f13c3-a8b8-46c2-a319-dffe529eaa15", 
      product_name:"the_classic_hoodie",
      colour:"yellow",
      size:"os",
      materials:"70% apalca, 20% wool, 10% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "b36ae885-b7ca-4ad1-a4e6-d00708dfae10", 
      product_name:"the_classic_crew_neck",
      colour:"green",
      size:"os",
      materials:"100% merino wool",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "59499ffa-d14e-4e33-9317-7c7a9362eb5b", 
      product_name:"neon_high-rise",
      colour:"pink",
      size:"os",
      materials:"100% lycra",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "8677fba6-153d-4448-bf57-f07868f73abe", 
      product_name:"swifty_high-rise",
      colour:"grey",
      size:"os",
      materials:"100% lycra",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "62995e3a-362d-470c-9f2a-91a1ab921cae", 
      product_name:"running_high-rise",
      colour:"black",
      size:"os",
      materials:"100% lycra",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "ab74b273-84d6-4f2f-97a4-fccd0dfd000f", 
      product_name:"sweat_v-waist",
      colour:"yellow",
      size:"os",
      materials:"100% lycra",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "68950efc-7426-47d2-871c-41c071a26802", 
      product_name:"train",
      colour:"green",
      size:"os",
      materials:"100% lycra",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "fa91483b-8679-49ae-a8a2-c08c7ae2d2b9", 
      product_name:"swifty",
      colour:"pink",
      size:"os",
      materials:"100% lycra",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "ed96542d-5dcd-4264-b1a9-52ad34c6a544", 
      product_name:"the_one",
      colour:"grey",
      size:"os",
      materials:"100% lycra",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "a8c48699-fff3-4bc0-ad21-17cacb1a3db4", 
      product_name:"the_classic",
      colour:"black",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "0f7c0695-36e0-43a3-9cfc-5a59c4c1f5a8", 
      product_name:"everyday",
      colour:"yellow",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "189ec624-1403-431f-b27a-94f71f71202d", 
      product_name:"bulletproof",
      colour:"green",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "70309fa2-4ded-4bd9-adc6-b3155c4ada6d", 
      product_name:"the_classic",
      colour:"pink",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "5a1d75c3-90ac-4e17-9d20-e48bb3823ac2", 
      product_name:"the_regal",
      colour:"grey",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "64862ddf-4ddb-41c1-894b-642ab71ed9a5", 
      product_name:"dolce_sweater",
      colour:"black",
      size:"os",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "1a8b1720-c907-4824-b691-58e37ff37cba", 
      product_name:"the_comfy_sweater",
      colour:"yellow",
      size:"os",
      materials:"100% merino wool",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "08e3ab5e-f923-40a6-8a79-1d434a3d63c0", 
      product_name:"sunday_cardigan",
      colour:"green",
      size:"os",
      materials:"100% merino wool",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "515eb730-9c7b-4972-be1f-da7decb9c821", 
      product_name:"knitted_cardigan",
      colour:"pink",
      size:"os",
      materials:"100% merino wool",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "b7488ce8-a4ad-40b4-88ae-089de1d12470", 
      product_name:"crochet_cardian",
      colour:"grey",
      size:"os",
      materials:"100% merino wool",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "1a6f585f-afb0-4559-94a5-98029deb2360", 
      product_name:"knitted_cardigan",
      colour:"pink",
      size:"os",
      materials:"100% merino wool",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "e9a47439-89ad-4ddf-968d-f8026692da99", 
      product_name:"crochet_cardian",
      colour:"",
      size:"os",
      materials:"100% merino wool",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "95d49da4-98e1-437b-bb4b-0a1be4c97761", 
      product_name:"pom_pom_cardigan",
      colour:"",
      size:"os",
      materials:"100% merino wool",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "09a3dae4-b65b-4953-9f96-b8013d303d5c", 
      product_name:"oxford_shirt",
      colour:"yellow",
      size:"m",
      materials:"60% cotton, 40% silk",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "3e506ad1-7711-43bc-bfd8-d8e5248e3bba", 
      product_name:"silk_shirt",
      colour:"green",
      size:"l",
      materials:"100% silk",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "c0e0d3ca-c6f6-4600-8ccb-218f9b6e98d7", 
      product_name:"popplin_embroidery_shirt",
      colour:"pink",
      size:"os",
      materials:"100% popplin cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "01094af6-4b84-4d23-8541-0f7af11f4e37", 
      product_name:"relaxed_shirt",
      colour:"grey",
      size:"s",
      materials:"100% linen",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "bdbbd053-c5ba-4efa-b2dc-91d70373d15a", 
      product_name:"puff_shirt",
      colour:"green",
      size:"l",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "d2294d57-6e9c-4adc-b19c-9978b2ef3c02", 
      product_name:"croissant_shirt",
      colour:"pink",
      size:"s",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "001ade8e-ba18-44e7-9464-91c53facff42", 
      product_name:"tunic_blouse",
      colour:"grey",
      size:"m",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "2f58889e-4cfe-428f-b841-24a673f13c4a", 
      product_name:"flowy_blouse",
      colour:"lilac",
      size:"m",
      materials:"100% crepe",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "d042a64a-b6d3-4a44-9003-4396f9a10695", 
      product_name:"drape_blouse",
      colour:"grey",
      size:"l",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "0bac3877-dea2-4335-8568-24350763fab2", 
      product_name:"bustier_top",
      colour:"black",
      size:"s",
      materials:"100% natural leather",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "24a07e87-4aa5-440f-88cf-0c9fb7395ea1", 
      product_name:"slouch_jeans",
      colour:"acid_black",
      size:"27",
      materials:"japanese denim",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "b8177a7c-bc72-4484-a232-3db5cc996609", 
      product_name:"painter_jeans",
      colour:"sapphire_blue",
      size:"26",
      materials:"japanese denim",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "1978201e-4e58-4704-9281-cec3eb310979", 
      product_name:"90's_jeans",
      colour:"acid_wash",
      size:"25",
      materials:"japanese denim",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "cb7b2eaa-a0ad-4d42-8617-e374474d5c44", 
      product_name:"classic_jeans",
      colour:"sapphire_blue",
      size:"28",
      materials:"japanese denim",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "e3c29f76-26d1-4385-8dc7-66127bdad184", 
      product_name:"the_classic",
      colour:"blue",
      size:"8",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "9988c630-05d5-4a5c-a8d5-5b5c57180e05", 
      product_name:"utility_barrel_pant",
      colour:"black",
      size:"6",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "981976de-6745-47c6-920c-d9ee23884e40", 
      product_name:"taper_pant",
      colour:"tan",
      size:"4",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "d0aa3bf7-eff2-4791-b834-8aaba8e30fcb", 
      product_name:"diane",
      colour:"taupe",
      size:"2",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "2c1dd301-9397-4a05-abf5-0711de647588", 
      product_name:"woody_dress",
      colour:"light_brown",
      size:"0",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "d0ff715d-bc3d-49a3-ab1b-2eb00d379cee", 
      product_name:"kelly_dress",
      colour:"green",
      size:"2",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "d6951f15-a140-412e-976a-7e796bc6990d", 
      product_name:"the_marilyn",
      colour:"burgundy",
      size:"6",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "e4d118c5-5bf3-4570-9839-d85ef196208e", 
      product_name:"the_audrey",
      colour:"black",
      size:"2",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "6f5984b9-82d2-4a1e-ac2c-b3a7c29c4ca2", 
      product_name:"charmeuse_gown",
      colour:"lilac",
      size:"6",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "8fc5f59c-0e78-408e-894b-563ed6feb473", 
      product_name:"halter_neck_dress",
      colour:"black",
      size:"4",
      materials:"100% silk",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "9ef038f3-3981-4558-86f6-c4302161f0ec", 
      product_name:"silk_kimono_dress",
      colour:"white",
      size:"4",
      materials:"100% silk",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "b6208ec4-63d3-475f-8b95-63337ae1a3a9", 
      product_name:"linen_jumpsuit",
      colour:"blue",
      size:"6",
      materials:"100% linen",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "25e14d23-0c26-454e-8a2a-63ddcef5381b", 
      product_name:"paige",
      colour:"red",
      size:"os",
      materials:"box-calf leather",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "86233364-7859-4fe5-ae01-ed9de8216f2f", 
      product_name:"yvonne",
      colour:"green",
      size:"os",
      materials:"cleamance leather",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "185eac80-4e39-47f3-bc1c-2cb0b8924a35", 
      product_name:"puffy_shoulder_bag",
      colour:"tan",
      size:"os",
      materials:"nappa leather",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "df0b50e5-f3df-4254-9d3e-83946cdc999e", 
      product_name:"leather_weave_shoulder_bag",
      colour:"green",
      size:"os",
      materials:"togo leather",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "7aa6d38a-a966-44a2-a849-27a4d0c0947b", 
      product_name:"penelope",
      colour:"pink",
      size:"os",
      materials:"calf leather",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "4ba4c86c-475c-4e2d-b52d-f3ffbc445f20", 
      product_name:"penne",
      colour:"yellow",
      size:"os",
      materials:"glovetanned leather",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "38a4b7cd-34e6-49b6-a230-113e2858bfce", 
      product_name:"siobhan",
      colour:"lilac",
      size:"os",
      materials:"rattan, calf leather",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "db418435-4efe-4768-88fc-40190ce3ca16", 
      product_name:"the_classic",
      colour:"lilac",
      size:"l",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "06791819-bd31-4b93-ae3a-1b96067b3d63", 
      product_name:"the_classic",
      colour:"lilac",
      size:"m",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "3da72263-405b-45c0-9f20-d4526149538a", 
      product_name:"the_classic",
      colour:"saddle_brown",
      size:"s",
      materials:"100% cotton",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "d87baef2-e606-4cab-9fb3-e0edef9423a0", 
      product_name:"sling_tote",
      colour:"black",
      size:"os",
      materials:"cleamance leather",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    },
    {
      product_uid: "c5093240-03ec-48c5-a112-d339e0d51b43", 
      product_name:"daily_tote",
      colour:"black",
      size:"os",
      materials:"cleamance leather",
      status:"active",
      units_instock:50,
      price:999999999,
      created_on:"2023-08-01 00:00:00",
      updated_on:"2023-08-01 00:00:00",
    }

  ]);
};