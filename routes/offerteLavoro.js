// INDEX

router.get("/offerte");


// NEW OFFERTA

router.get("/offerte/new");


// CREATE OFFERTA

router.post("/offerte");


// SHOW OFFERTA

router.get("/offerte/:id");


// EDIT OFFERTA

router.get("/offerte/:id/edit");


// UPDATE OFFERTA

router.put("offerte/:id");


// DELETE OFFERTA

router.delete("offerte/:id");



module.exports = router;