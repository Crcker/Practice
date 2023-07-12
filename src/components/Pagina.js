import React from 'react';
import {Pagination} from "react-bootstrap";
import "./styles/Pagina.css"

const Pages = () => {
    const pages = [1, 2, 3, 4, 5]


    return (
        <Pagination className='pagina'>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={page}
                    //onClick={() => product.setPage(page)}
                    activeLabel=''
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
};

export default Pages;