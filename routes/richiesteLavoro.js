// INDEX

router.get("/richieste");


// NEW RICHIESTA

router.get("/richieste/new");


// CREATE RICHIESTA

router.post("/richieste");


// SHOW RICHIESTA

router.get("/richieste/:id");


// EDIT RICHIESTA

router.get("/richieste/:id/edit");


// UPDATE RICHIESTA

router.put("/richieste/:id");


// DELETE RICHIESTA

router.delete("/richieste/:id");