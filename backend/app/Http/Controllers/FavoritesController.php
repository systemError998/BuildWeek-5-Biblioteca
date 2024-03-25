<?php

namespace App\Http\Controllers;

use App\Models\favorites;
use App\Http\Requests\StorefavoritesRequest;
use App\Http\Requests\UpdatefavoritesRequest;
use Illuminate\Support\Facades\Auth;

class FavoritesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return favorites::where("user_id", Auth::user()->id)->get();
        // return favorites::get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorefavoritesRequest $request)
    {
        $newFav = $request->only(["book_id"]);
        $newFav["user_id"]= Auth::user()->id;
        $fav = favorites::create($newFav);
        if($fav){
           return "favorito inserito";
        } else {
            return ["message" => "Errore durante la creazione del favorito", "error"=>"favorito non presente o che cazzo ne so"];
        };
    }

    /**
     * Display the specified resource.
     */
    public function show(favorites $favorites)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(favorites $favorites)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatefavoritesRequest $request, favorites $favorites)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(favorites $favorites)
    {
        $delteFav = $favorites->delete();
        return $delteFav ? "fav eliminato" : "fav non trovato";
    }
}
