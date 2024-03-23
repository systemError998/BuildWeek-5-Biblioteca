<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

    ['page' => $page, 'category' => $category, 'title' => $title,"author"=>$author, "abstract"=>$abstract , "year"=>$year] = $request;
        $page=$page ? $page : 1;
        
        return Book::with("author")->with("category")
                    ->where("title","like","%$title%")
                    ->where("abstract","like","%$abstract%")
                    ->where("year","like","%$year%")
                    ->whereHas('category', function($query) use ($category) {
                        $query->where('name', 'like', "%$category%");
                    })
                    ->whereHas('author', function($query) use ($author) {
                        $query->where('full_name', 'like', "%$author%");
                    })
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
    public function store(StoreBookRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
       return $book->load("author")->load("category");
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        //
    }
}
