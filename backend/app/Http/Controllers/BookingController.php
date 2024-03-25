<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Http\Requests\StoreBookingRequest;
use App\Http\Requests\UpdateBookingRequest;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return Booking::with("book")->with("user")->orderBy("is_active","desc")->orderBy("expiring_date","asc")->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return ;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookingRequest $request)
    {
        $newBooking = $request->only(["user_id","book_id"]);
        try {
           $Booking = Booking::create($newBooking);
            return ["message"=>"Prenotazione effettuata con successo"];
        } catch (\Throwable $th) {
            return ["message"=>"Si è verificato un errore", "error"=>$th];
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Booking $booking)
    {
       return $booking->load("user")->load("book");
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Booking $booking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookingRequest $request, Booking $booking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booking $booking)
    {
        try {
            $booking->delete();
            return ["message"=>"L'oggetto è stato eliminato con successo"];
        } catch (\Throwable $th) {
            return ["message"=>"Si è verificato un errore", "error"=>$th];
        }
    }
}
