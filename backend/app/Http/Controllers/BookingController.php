<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Http\Requests\StoreBookingRequest;
use App\Http\Requests\UpdateBookingRequest;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Booking::with("book")->with("user")->where("user_id","=",Auth::user()->id)->orderBy("is_active", "desc")->orderBy("expiring_date", "asc")->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookingRequest $request)
    {
        
        try {
            $this->authorize('create', [Booking::class]);
            $newBooking = $request->only(["book_id"]);
            $newBooking['user_id']=Auth::user()->id;
            $booking = Booking::create($newBooking);
            if ($booking) {
                return ["message" => "Prenotazione effettuata con successo"];
            }
            return ["message" => "Si è verificato un errore", "error" => "Problemi"];
        }catch (\Exception $e) {

            if ($e instanceof AuthorizationException) {
                return ['message' => "You're not allowed to create activities!"];

            } else {
                return ['message' => "Error while creating Booking: " . $e->getMessage()];
               
            }
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
            return ["message" => "L'oggetto è stato eliminato con successo"];
        } catch (\Throwable $th) {
            return ["message" => "Si è verificato un errore", "error" => $th];
        }
    }
}
