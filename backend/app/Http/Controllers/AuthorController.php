<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Http\Requests\StoreAuthorRequest;
use App\Http\Requests\UpdateAuthorRequest;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        ['page' => $page, "author"=>$author] = $request;
        $page=$page ? $page : 1;
        return Author::with("books")->with("categories")
                        ->where('full_name', 'like', "%$author%")
                        ->orderBy("full_name","asc")
                        ->paginate(20, ['*'], 'page', $page);
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
    public function store(StoreAuthorRequest $request)
    {
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Author $author)
    {
        return $author->load("categories.authors")->load("books.category");
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Author $author)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAuthorRequest $request, Author $author)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Author $author)
    {
        try {
            $author->delete();
            return ["message"=>"L'oggetto è stato eliminato con successo"];
        } catch (\Throwable $th) {
            return ["message"=>"Si è verificato un errore", "error"=>$th];
        }
    }
}
