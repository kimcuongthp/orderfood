<?php

namespace Modules\Slider\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Slider\Entities\Slide;
use Modules\Slider\Http\Requests\CreateSlideRequest;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        $slides = Slide::defaultOrder()->get()->toTree();

        return view('slider::index', compact('slides'));
    }
    public function store(CreateSlideRequest $request)
    {
        $rs = [
            'note_type' => 'error',
            'note' => 'Có lỗi xảy ra vui lòng thử lại'
        ];
        try{
            Slide::create([
                'name' => $request->name,
                'image' => $request->image
            ]);
            $rs['note_type'] = 'success';
            $rs['note'] = 'Tạo slide thành công!';
            return redirect()->back()->with($rs);
        }
        catch (\Exception $e)
        {
            return redirect()->back()->with($rs);
        }

    }
    public function order(Request $request)
    {
        $order = json_decode($request->order, true);
        Slide::rebuildTree($order);
    }
    public function destroy(Slide $slide)
    {
        $slide->delete();
        return redirect()->back()->with([
            'note_type' => 'success',
            'note' => 'Xóa slide thành công!'
        ]);
    }
}
