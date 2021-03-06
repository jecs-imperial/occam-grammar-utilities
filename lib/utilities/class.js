"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isInstanceOf = isInstanceOf;
function isInstanceOf(instance, Class) {
    var constructor = instance.constructor;
    if (constructor) {
        if (constructor.name === Class.name) {
            return true;
        } else {
            var prototype = Object.getPrototypeOf(constructor);
            return isPrototypeInstanceOf(prototype, Class);
        }
    }
    return false;
}
function isPrototypeInstanceOf(prototype, Class) {
    if (prototype) {
        if (prototype.name === Class.name) {
            return true;
        } else {
            prototype = Object.getPrototypeOf(prototype);
            return isPrototypeInstanceOf(prototype, Class);
        }
    }
    return false;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2xhc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luc3RhbmNlT2YoaW5zdGFuY2UsIENsYXNzKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yID0gaW5zdGFuY2UuY29uc3RydWN0b3I7XG5cbiAgaWYgKGNvbnN0cnVjdG9yKSB7XG4gICAgaWYgKGNvbnN0cnVjdG9yLm5hbWUgPT09IENsYXNzLm5hbWUpIHsgIC8vL1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjb25zdHJ1Y3Rvcik7XG5cbiAgICAgIHJldHVybiBpc1Byb3RvdHlwZUluc3RhbmNlT2YocHJvdG90eXBlLCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1Byb3RvdHlwZUluc3RhbmNlT2YocHJvdG90eXBlLCBDbGFzcykge1xuICBpZiAocHJvdG90eXBlKSB7XG4gICAgaWYgKHByb3RvdHlwZS5uYW1lID09PSBDbGFzcy5uYW1lKSB7ICAvLy9cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcblxuICAgICAgcmV0dXJuIGlzUHJvdG90eXBlSW5zdGFuY2VPZihwcm90b3R5cGUsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7OztRQUVBLFlBQUEsR0FBQSxZQUFBO1NBQUEsWUFBQSxDQUFBLFFBQUEsRUFBQSxLQUFBO1FBQ0EsV0FBQSxHQUFBLFFBQUEsQ0FBQSxXQUFBO1FBRUEsV0FBQTtZQUNBLFdBQUEsQ0FBQSxJQUFBLEtBQUEsS0FBQSxDQUFBLElBQUE7bUJBQ0EsSUFBQTs7Z0JBRUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsV0FBQTttQkFFQSxxQkFBQSxDQUFBLFNBQUEsRUFBQSxLQUFBOzs7V0FJQSxLQUFBOztTQUdBLHFCQUFBLENBQUEsU0FBQSxFQUFBLEtBQUE7UUFDQSxTQUFBO1lBQ0EsU0FBQSxDQUFBLElBQUEsS0FBQSxLQUFBLENBQUEsSUFBQTttQkFDQSxJQUFBOztBQUVBLHFCQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxTQUFBO21CQUVBLHFCQUFBLENBQUEsU0FBQSxFQUFBLEtBQUE7OztXQUlBLEtBQUEifQ==