import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {movies} from '../Data/Movies.json';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export const FilmListe = () => {
    return (
        <>

           
                <div class="container.fluid d-flex flex-row flex-wrap m-l-1 ">
                    {

                        movies.map(movie => {


                            return (

                                <div className="">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={movie.posterUrl} />
                                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                             </Card.Text>
                                             
                                            <Button variant="primary">Ajouter a la liste</Button>
                                        </Card.Body>
                                    </Card>






                                </div>


                            )



                            })


                        

                    }
                </div>

           
        </>

    );

}

export default FilmListe;