exports.getDestinos = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        const query = `SELECT * FROM destinos_turisticos;`
        conn.query(query, (err, result) => {
            if (err) return res.send(err);
            res.send(result);
        });
    });
};